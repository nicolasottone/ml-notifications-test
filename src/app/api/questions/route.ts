import { NextRequest, NextResponse } from 'next/server'

let variable: any = { status: 'Todavia no se recibio nada' }

export async function POST(req: Request) {
  variable = await req.json()
  console.log('se ha redirigidio el POST', variable)
  return NextResponse.json({})
}

export async function GET() {
  return NextResponse.json(variable)
}
