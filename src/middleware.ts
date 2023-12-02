import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Add the logic to refetch to the correct api (messages, questions, items, etc)
  const origin = request.nextUrl.origin
  const destination = new URL(`${origin}/api/questions`)

  const headers = new Headers(request.headers)

  //Always is POST, so it s have body
  const newRequest = new Request(destination, {
    method: request.method,
    headers: headers,
    body: await request.text()
  })

  await fetch(newRequest)

  return NextResponse.next()
}

export const config = {
  matcher: '/api/notifications/:path*'
}
