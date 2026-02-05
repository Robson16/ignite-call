'use client'

import { Button, MultiStep, Text } from '@beryl-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'

import {
  ConnectCalendarBox,
  ConnectCalendarContainer,
  ConnectCalendarItem,
} from './styles'

export function ConnectCalendar() {
  const session = useSession()

  return (
    <ConnectCalendarContainer>
      <MultiStep size={4} currentStep={2} />

      <ConnectCalendarBox>
        <ConnectCalendarItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
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

        <pre>
          <Text>{JSON.stringify(session.data?.user?.name)}</Text>
        </pre>
      </ConnectCalendarBox>
    </ConnectCalendarContainer>
  )
}
