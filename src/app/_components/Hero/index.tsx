'use client'

import { HeroContainer, HeroHeading, HeroText } from './styles'

export default function Hero() {
  return (
    <HeroContainer>
      <HeroHeading size="4xl">Agendamento descomplicado</HeroHeading>
      <HeroText size="xl">
        Conecte seu calendário e permita que as pessoas marquem agendamentos no
        seu tempo livre.
      </HeroText>
    </HeroContainer>
  )
}
