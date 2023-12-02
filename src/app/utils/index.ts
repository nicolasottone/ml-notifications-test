import { QuestionDetailsType } from './types'

export async function getQuestionDetails(questionId: string) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/questions/${questionId}?api_version=4`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`
      }
    })
    if (!response.ok) {
      console.error('Error fetching question details:', response.statusText)
      return null
    }
    const question: QuestionDetailsType = await response.json()
    return question.text
  } catch (error) {
    console.error('Error fetching question details:', error)
    return null
  }
}
