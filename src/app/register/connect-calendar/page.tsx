import { Suspense } from 'react'

import { ConnectCalendar } from '../_components/ConnectCalendar'
import { RegisterSkeleton } from '../_components/RegisterSkeleton'
import {
  RegisterContainer,
  RegisterHeader,
  RegisterHeaderText,
  RegisterHeaderTitle,
} from '../styles'

export default function RegisterPage() {
  return (
    <RegisterContainer>
      <RegisterHeader>
        <RegisterHeaderTitle as="strong">
          Conecte sua agenda!
        </RegisterHeaderTitle>
        <RegisterHeaderText>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </RegisterHeaderText>
      </RegisterHeader>

      <Suspense fallback={<RegisterSkeleton />}>
        <ConnectCalendar />
      </Suspense>
    </RegisterContainer>
  )
}
