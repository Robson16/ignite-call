'use client'

import { ClaimUsernameForm } from './ClaimUsernameForm'
import { HomeIntroContainer, HomeIntroHeading, HomeIntroText } from './styles'

export default function HomeIntro() {
  return (
    <HomeIntroContainer>
      <HomeIntroHeading size="4xl">Agendamento descomplicado</HomeIntroHeading>

      <HomeIntroText size="xl">
        Conecte seu calendário e permita que as pessoas marquem agendamentos no
        seu tempo livre.
      </HomeIntroText>

      <ClaimUsernameForm />
    </HomeIntroContainer>
  )
}
