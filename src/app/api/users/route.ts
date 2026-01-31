import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/app/_lib/prisma'

export async function POST(request: NextRequest) {
  const { name, username } = await request.json()

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  return NextResponse.json(user, {
    status: 201,
  })
}
