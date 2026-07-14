import { Suspense } from 'react'

import { Skeleton } from '../_components/Skeleton'
import { TimeInterval } from '../_components/TimeInterval'
import { Container, Header, HeaderText, HeaderTitle } from '../styles'

export default function TimeIntervalPage() {
  return (
    <Container>
      <Header>
        <HeaderTitle as="strong">Quase lá</HeaderTitle>
        <HeaderText>
          Defina o intervalo de horários que você está disponivel em cada dia da
          semana.
        </HeaderText>
      </Header>

      <Suspense fallback={<Skeleton />}>
        <TimeInterval />
      </Suspense>
    </Container>
  )
}
