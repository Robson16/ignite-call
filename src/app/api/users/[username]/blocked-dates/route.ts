import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import dayjs from '@/app/_lib/dayjs'
import { prisma } from '@/app/_lib/prisma'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ username: string }> },
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const { username } = await params

  const searchParams = request.nextUrl.searchParams
  const year = searchParams.get('year')
  const month = searchParams.get('month')

  if (!year) {
    return NextResponse.json({ message: 'Year not provided.' }, { status: 400 })
  }

  if (!month) {
    return NextResponse.json(
      { message: 'Month not provided.' },
      { status: 400 },
    )
  }

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

  return NextResponse.json({ blockedWeekDays })
}
