'use client'

import { Button, TextInput } from '@beryl-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Form } from './styles'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data.username)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="cal.com/"
        placeholder="seu-usuario"
        {...register('username')}
      />

      <Button size="md" type="submit">
        <>
          Reservar
          <ArrowRight />
        </>
      </Button>
    </Form>
  )
}
