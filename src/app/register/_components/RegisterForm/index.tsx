'use client'

import { Button, MultiStep, Text, TextInput } from '@beryl-ui/react'
import { ArrowRight } from 'phosphor-react'

import { RegisterFormBox, RegisterFormContainer } from './styles'

export function RegisterForm() {
  return (
    <RegisterFormContainer>
      <MultiStep size={4} currentStep={1} />

      <RegisterFormBox as="form">
        <Text as="label" size="sm">
          Nome de usuário
          <TextInput prefix="cal.com/" placeholder="seu-usuario" />
        </Text>

        <Text as="label" size="sm">
          Nome Completo
          <TextInput placeholder="Seu nome" />
        </Text>

        <Button type="submit">
          <>
            Próximo passo
            <ArrowRight />
          </>
        </Button>
      </RegisterFormBox>
    </RegisterFormContainer>
  )
}
