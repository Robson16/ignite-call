import { Button, Text, TextArea, TextInput } from '@beryl-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'next/navigation'
import { CalendarBlank, Clock } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { api } from '@/app/_lib/axios'
import dayjs from '@/app/_lib/dayjs'

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

interface ConfirmStepProps {
  schedulingDate: Date
  onReturnToCalendarStep: () => void
}

export function ConfirmStep({
  schedulingDate,
  onReturnToCalendarStep,
}: ConfirmStepProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  const params = useParams()

  const username = String(params?.username ?? '')

  async function handleConfirmScheduling(data: ConfirmFormData) {
    const { name, email, observations } = data

    await api.post(`/users/${username}/schedule`, {
      name,
      email,
      observations,
      date: schedulingDate,
    })

    onReturnToCalendarStep()
  }

  const describedDate = dayjs(schedulingDate).format('DD[ de ]MMMM[ de ]YYYY')
  const describedTime = dayjs(schedulingDate).format('HH:mm[h]')

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <FormHeaderText>
          <CalendarBlank /> {describedDate}
        </FormHeaderText>
        <FormHeaderText>
          <Clock /> {describedTime}
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
        <Button
          type="button"
          variant="tertiary"
          onClick={onReturnToCalendarStep}
        >
          <>Cancelar</>
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          <>Confirmar</>
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
