import { NextRequest, NextResponse } from 'next/server'

let variable: any = { status: 'Nothing to see' }

export async function POST(req: Request) {
  variable = await req.json()
  console.log('se ha redirigidio la sig noti', variable)
  
  return NextResponse.json({})
}

export async function GET() {
  return NextResponse.json(variable)
}
