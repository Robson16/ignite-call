import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import { prisma } from '@/app/_lib/prisma'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function GET(
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

    const searchParams = request.nextUrl.searchParams
    const year = searchParams.get('year')
    const month = searchParams.get('month')

    if (!year) {
      return NextResponse.json(
        { message: 'Year not provided.' },
        { status: 400 },
      )
    }

    if (!month) {
      return NextResponse.json(
        { message: 'Month not provided.' },
        { status: 400 },
      )
    }

    const availableWeekDays = await prisma.userTimeInterval.findMany({
      select: {
        week_day: true,
      },
      where: {
        user_id: user.id,
      },
    })

    const blockedWeekDays = [0, 1, 2, 3, 4, 5, 6].filter((weekDay) => {
      return !availableWeekDays.some(
        (availableWeekDay) => availableWeekDay.week_day === weekDay,
      )
    })

    const blockedDatesRaw: Array<{ date: number }> = await prisma.$queryRaw`
      SELECT
        EXTRACT(DAY FROM S.DATE) AS date,
        COUNT(S.date),
        ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60)
      FROM schedulings S
      LEFT JOIN user_time_intervals UTI
        ON UTI.week_day = EXTRACT(DOW FROM S.date + INTERVAL '1 day')
      WHERE S.user_id = ${user.id}
        AND EXTRACT(YEAR FROM S.date) = ${year}::int
        AND EXTRACT(MONTH FROM S.date) = ${month}::int
      GROUP BY EXTRACT(DAY FROM S.DATE),
        ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60)
      HAVING
        COUNT(S.date) >= ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60);
    `

    const blockedDates = blockedDatesRaw.map((item) => item.date)

    return NextResponse.json({ blockedWeekDays, blockedDates })
  } catch (error) {
    console.error('[Blocked Dates API]', error)

    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
