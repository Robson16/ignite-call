'use client'

import { Avatar, Button, MultiStep, Text, TextArea } from '@beryl-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { api } from '@/app/_lib/axios'

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

  const router = useRouter()
  const session = useSession()

  async function handleUpdateProfile(data: UpdateProfileData) {
    await api.put('/users/update-profile', {
      bio: data.bio,
    })

    await router.push(`/schedule/${session.data?.user.username}`)
  }

  return (
    <UpdateProfileContainer>
      <MultiStep size={4} currentStep={4} />

      <UpdateProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
        <Text as="label" size="sm">
          Foto de perfil
          <Avatar
            src={session.data?.user.avatar_url}
            alt={session.data?.user.name}
          />
        </Text>

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
