'use client'

import { Button, MultiStep, Text } from '@beryl-ui/react'
import { useSearchParams } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import { ArrowRight, Check } from 'phosphor-react'

import {
  AuthError,
  ConnectCalendarBox,
  ConnectCalendarContainer,
  ConnectCalendarItem,
} from './styles'

export function ConnectCalendar() {
  const session = useSession()
  const searchParams = useSearchParams()

  const hasAuthError = !!searchParams.get('error')
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  return (
    <ConnectCalendarContainer>
      <MultiStep size={4} currentStep={2} />

      <ConnectCalendarBox>
        <ConnectCalendarItem>
          <Text>Google Calendar</Text>
          {isSignedIn ? (
            <Button size="sm" disabled>
              <>
                Conectado
                <Check />
              </>
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              <>
                Conectar
                <ArrowRight />
              </>
            </Button>
          )}
        </ConnectCalendarItem>

        {hasAuthError && (
          <AuthError size="sm">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar.
          </AuthError>
        )}

        <Button type="submit" disabled={!isSignedIn}>
          <>
            Próximo passo
            <ArrowRight />
          </>
        </Button>
      </ConnectCalendarBox>
    </ConnectCalendarContainer>
  )
}
