import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { z } from 'zod'

import { prisma } from '@/app/_lib/prisma'

import { authOptions } from '../../auth/[...nextauth]/route'

const timeIntervalsBodySchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        startTimeInMinutes: z.number(),
        endTimeInMinutes: z.number(),
      }),
    )
    .refine(
      (intervals) => {
        return intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes,
        )
      },
      {
        message:
          'O horário de termino deve ser pelo menos 1h distante do início',
      },
    ),
})

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()

    const { intervals } = timeIntervalsBodySchema.parse(body)

    await prisma.$transaction([
      prisma.userTimeInterval.deleteMany({
        where: {
          user_id: session.user.id,
        },
      }),

      prisma.userTimeInterval.createMany({
        data: intervals.map((interval) => {
          return {
            week_day: interval.weekDay,
            time_start_in_minutes: interval.startTimeInMinutes,
            time_end_in_minutes: interval.endTimeInMinutes,
            user_id: session.user.id,
          }
        }),
      }),
    ])

    return NextResponse.json({}, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation failed.', issues: error.format() },
        { status: 400 },
      )
    }

    console.error('[API Time Intervals]', error)

    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
