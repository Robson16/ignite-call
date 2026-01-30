'use client'

import { Button, TextInput } from '@beryl-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
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
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    try {
      const { username } = data
      await router.push(`/register?username=${username}`)
    } catch (error) {
      // TODO: Usar um toast para exibir erro
      console.error('Falha ao redirecionar para a página de registro:', error)
      alert('Ocorreu um erro. Tente novamente.')
    }
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

        <Button size="md" type="submit" disabled={isSubmitting}>
          <>
            Reservar
            <ArrowRight />
          </>
        </Button>
      </Form>

      <FormAnnotation size="sm">
        {errors.username?.message ?? 'Digite o nome do usuário desejado'}
      </FormAnnotation>
    </>
  )
}
