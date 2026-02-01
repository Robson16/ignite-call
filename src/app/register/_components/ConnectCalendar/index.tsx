'use client'

import { Button, MultiStep, Text } from '@beryl-ui/react'
import { ArrowRight } from 'phosphor-react'

import {
  ConnectCalendarBox,
  ConnectCalendarContainer,
  ConnectCalendarItem,
} from './styles'

export function ConnectCalendar() {
  return (
    <ConnectCalendarContainer>
      <MultiStep size={4} currentStep={2} />

      <ConnectCalendarBox>
        <ConnectCalendarItem>
          <Text>Google Calendar</Text>
          <Button variant="secondary" size="sm">
            <>
              Conectar
              <ArrowRight />
            </>
          </Button>
        </ConnectCalendarItem>

        <Button>
          <>
            Próximo passo
            <ArrowRight />
          </>
        </Button>
      </ConnectCalendarBox>
    </ConnectCalendarContainer>
  )
}
