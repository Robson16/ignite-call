import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import z from 'zod'

import dayjs from '@/app/_lib/dayjs'
import { prisma } from '@/app/_lib/prisma'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const createScheduleBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  observations: z.string(),
  date: z.string().datetime(),
})

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ username: string }> },
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const { username } = await params

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    })

    if (!user) {
      return NextResponse.json(
        { message: 'User does not exist.' },
        { status: 400 },
      )
    }

    const body = await request.json()

    const { name, email, observations, date } =
      createScheduleBodySchema.parse(body)

    const schedulingDate = dayjs(date).startOf('hour')

    if (schedulingDate.isBefore(new Date())) {
      return NextResponse.json(
        { message: 'Date is in the past.' },
        { status: 400 },
      )
    }

    const conflictingScheduling = await prisma.scheduling.findFirst({
      where: {
        user_id: user.id,
        date: schedulingDate.toDate(),
      },
    })

    if (conflictingScheduling) {
      return NextResponse.json(
        { message: 'There is another scheduling at the same time.' },
        { status: 400 },
      )
    }

    await prisma.scheduling.create({
      data: {
        name,
        email,
        observations,
        date: schedulingDate.toDate(),
        user_id: user.id,
      },
    })

    return NextResponse.json({}, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation failed.', issues: error.format() },
        { status: 400 },
      )
    }

    console.error('[Schedule API]', error)

    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
