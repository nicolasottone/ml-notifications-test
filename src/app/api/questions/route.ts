import { NextRequest, NextResponse } from 'next/server'
import { NotificationType } from '@/app/utils/notifications/types'
import { getQuestion } from '@/app/utils/questions'
import OpenAI from 'openai'

//export const runtime = 'edge'
export const dynamic = 'force-dynamic'

type QAType = {
  question: string
  answer?: string | null
  id: number
}

let QA: QAType = {
  question: 'Empty',
  answer: 'Empty',
  id: 12345
}

export async function POST(request: NextRequest) {
  const notification = (await request.json()) as NotificationType

  const question = await getQuestion(notification)

  if (question?.status == 'UNANSWERED') {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        temperature: 1,
        messages: [
          {
            role: 'system',
            content: `You are a Mercado Libre seller. Answer the user question with invented data.`
          },
          {
            role: 'user',
            content: question.text
          }
        ]
      })

      QA.answer = response.choices[0].message.content
    } catch (error) {
      console.error('Error calling OpenAI API: ', error)
    } finally {
      QA.question = question.text
      QA.id = question.id
    }
  }

  return new NextResponse()
}

export async function GET() {
  return NextResponse.json(QA)
}
