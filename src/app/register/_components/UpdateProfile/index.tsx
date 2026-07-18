'use client'

import { Button, MultiStep, Text, TextArea } from '@beryl-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import {
  FormAnnotation,
  UpdateProfileBox,
  UpdateProfileContainer,
} from './styles'

const updateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  const session = useSession()

  async function handleUpdateProfile(data: UpdateProfileData) {
    console.log('Dados do formulário:', data)
    console.log('Sessão:', session.data)
  }

  return (
    <UpdateProfileContainer>
      <MultiStep size={4} currentStep={4} />

      <UpdateProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
        <Text size="sm">Foto de perfil</Text>

        <Text as="label" size="sm">
          Sobre você
          <TextArea {...register('bio')} />
          <FormAnnotation>
            Fale um pouco sobre você. Isto será exibido em sua página pessoal.
          </FormAnnotation>
        </Text>

        <Button type="submit" disabled={isSubmitting}>
          <>
            Finalizar
            <ArrowRight />
          </>
        </Button>
      </UpdateProfileBox>
    </UpdateProfileContainer>
  )
}
