import { notFound } from 'next/navigation'

import { prisma } from '@/app/_lib/prisma'

import { UserHeader } from '../_components/UserHeader'
import { Container } from './styles'

export const revalidate = 60 * 60 * 24 // 1 day

interface SchedulePageProps {
  params: {
    username: string
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
    </Container>
  )
}
