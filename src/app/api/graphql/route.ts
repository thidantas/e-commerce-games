import { NextRequest, NextResponse } from 'next/server'

import { env } from 'lib/config/env'

export async function POST(request: NextRequest) {
  const res = await fetch(`${env.LOCAL_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: await request.text()
  })

  const data = await res.text()

  return new NextResponse(data, {
    status: res.status,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
