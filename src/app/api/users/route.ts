import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/app/_lib/prisma'

export async function POST(request: NextRequest) {
  const { name, username } = await request.json()

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return NextResponse.json(
      { message: 'Nome de usuário já em uso.' },
      {
        status: 400,
      },
    )
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  const response = NextResponse.json(user, {
    status: 201,
  })

  response.cookies.set('@ignite-call:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 Days
    path: '/',
  })

  return response
}
