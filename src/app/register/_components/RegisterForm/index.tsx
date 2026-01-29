'use client'

import { Button, MultiStep, Text, TextInput } from '@beryl-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import {
  RegisterFormBox,
  RegisterFormContainer,
  RegisterFormError,
} from './styles'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Minimo de 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, { message: 'Apenas letras e hifens.' })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

  return (
    <RegisterFormContainer>
      <MultiStep size={4} currentStep={1} />

      <RegisterFormBox as="form" onSubmit={handleSubmit(handleRegister)}>
        <Text as="label" size="sm">
          Nome de usuário
          <TextInput
            prefix="cal.com/"
            placeholder="seu-usuario"
            {...register('username')}
          />
          {errors.username && (
            <RegisterFormError size="sm">
              {errors.username.message}
            </RegisterFormError>
          )}
        </Text>

        <Text as="label" size="sm">
          Nome Completo
          <TextInput placeholder="Seu nome" {...register('name')} />
          {errors.name && (
            <RegisterFormError size="sm">
              {errors.name.message}
            </RegisterFormError>
          )}
        </Text>

        <Button type="submit" disabled={isSubmitting}>
          <>
            Próximo passo
            <ArrowRight />
          </>
        </Button>
      </RegisterFormBox>
    </RegisterFormContainer>
  )
}
