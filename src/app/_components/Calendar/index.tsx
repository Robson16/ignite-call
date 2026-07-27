'use client'

import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'

import dayjs from '@/app/_lib/dayjs'
import { getWeekDays } from '@/app/_utils/get-week-days'

import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')
  const shortWeekDays = getWeekDays({ short: true })

  function handlePreviousMonth() {
    const previousMonthData = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonthData)
  }

  function handleNextMonth() {
    const nextMonthData = currentDate.add(1, 'month')

    setCurrentDate(nextMonthData)
  }

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous month">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="Next month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, weekIndex) => (
            <tr key={weekIndex}>
              {Array.from({ length: 7 }).map((_, dayIndex) => (
                <td key={dayIndex}>
                  <CalendarDay type="button" aria-hidden="true">
                    00
                  </CalendarDay>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
