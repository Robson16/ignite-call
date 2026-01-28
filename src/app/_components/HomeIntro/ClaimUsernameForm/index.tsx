'use client'

import { Button, TextInput } from '@beryl-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="cal.com/" placeholder="seu-usuário" />
      <Button size="md" type="submit">
        <>
          Reservar
          <ArrowRight />
        </>
      </Button>
    </Form>
  )
}
