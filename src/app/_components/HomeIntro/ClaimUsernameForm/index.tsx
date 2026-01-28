'use client'

import { Button, TextInput } from '@beryl-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Form, FormAnnotation } from './styles'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Minimo de 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Apenas letras e hifens.' })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data.username)
  }

  return (
    <>
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

      <FormAnnotation size="sm">
        {errors.username
          ? errors.username.message
          : 'Digite o nome do usuário desejado'}
      </FormAnnotation>
    </>
  )
}
