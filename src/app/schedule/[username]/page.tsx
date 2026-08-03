import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { prisma } from '@/app/_lib/prisma'

import { ScheduleForm } from '../_components/ScheduleForm'
import { UserHeader } from '../_components/UserHeader'
import { Container } from './styles'

interface SchedulePageProps {
  params: {
    username: string
  }
}

export const revalidate = 60 * 60 * 24 // 1 day

export async function generateMetadata({
  params,
}: SchedulePageProps): Promise<Metadata> {
  const { username } = await params

  const user = await prisma.user.findUnique({
    where: { username },
  })

  return {
    title: `Agendar com ${user?.name || 'usuário'}`,
  }
}

export default async function SchedulePage({ params }: SchedulePageProps) {
  const { username } = await params

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    notFound()
  }

  return (
    <Container>
      <UserHeader name={user.name} bio={user.bio} avatarUrl={user.avatar_url} />
      <ScheduleForm />
    </Container>
  )
}
