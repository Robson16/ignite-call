import { Button, Text, TextArea, TextInput } from '@beryl-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarBlank, Clock } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import {
  ConfirmForm,
  FormActions,
  FormError,
  FormHeader,
  FormHeaderText,
} from './styles'

const confirmFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa no mínimo 3 caracteres.' }),
  email: z
    .string()
    .min(1, { message: 'O e-mail é obrigatório.' })
    .email({ message: 'Digite um e-mail válido.' })
    .toLowerCase(),
  observations: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof confirmFormSchema>

export function ConfirmStep() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data)
  }

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <FormHeaderText>
          <CalendarBlank /> 25 de Julho de 2026
        </FormHeaderText>
        <FormHeaderText>
          <Clock /> 18:00h
        </FormHeaderText>
      </FormHeader>

      <Text as="label">
        <Text size="sm">Nome Completo</Text>
        <TextInput placeholder="Seu nome" {...register('name')} />
        {errors.name && <FormError size="sm">{errors.name.message}</FormError>}
      </Text>

      <Text as="label">
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput
          type="email"
          placeholder="johndoe@example.com"
          {...register('email')}
        />
        {errors.email && (
          <FormError size="sm">{errors.email.message}</FormError>
        )}
      </Text>

      <Text as="label">
        <Text size="sm">Observações</Text>
        <TextArea {...register('observations')} />
      </Text>

      <FormActions>
        <Button type="button" variant="tertiary">
          <>Cancelar</>
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          <>Confirmar</>
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
