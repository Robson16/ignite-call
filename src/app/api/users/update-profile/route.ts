import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { z } from 'zod'

import { prisma } from '@/app/_lib/prisma'

import { authOptions } from '../../auth/[...nextauth]/route'

const updateProfileBodySchema = z.object({
  bio: z.string().trim().max(160).optional().or(z.literal('')),
})

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json().catch(() => null)

    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { message: 'Invalid request body.' },
        { status: 400 },
      )
    }

    const parsed = updateProfileBodySchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Validation failed.', issues: parsed.error.format() },
        { status: 400 },
      )
    }

    const { bio } = parsed.data

    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        bio: bio ?? null,
      },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error('[Update Profile API]', error)

    return NextResponse.json(
      {
        message: 'Internal Server Error',
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
