import { Suspense } from 'react'

import { ConnectCalendar } from '../_components/ConnectCalendar'
import { Skeleton } from '../_components/Skeleton'
import { Container, Header, HeaderText, HeaderTitle } from '../styles'

export default function ConnectCalendarPage() {
  return (
    <Container>
      <Header>
        <HeaderTitle as="strong">Conecte sua agenda!</HeaderTitle>
        <HeaderText>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </HeaderText>
      </Header>

      <Suspense fallback={<Skeleton />}>
        <ConnectCalendar />
      </Suspense>
    </Container>
  )
}
