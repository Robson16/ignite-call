'use client'

import { Avatar } from '@beryl-ui/react'

import { Heading, Text, UserHeaderContainer } from './styles'

interface UserHeaderProps {
  name: string
  bio: string | null
  avatarUrl: string | null
}

export function UserHeader({ name, bio, avatarUrl }: UserHeaderProps) {
  return (
    <UserHeaderContainer>
      <Avatar src={avatarUrl ?? ''} alt={name} />
      <Heading>{name}</Heading>
      <Text>{bio}</Text>
    </UserHeaderContainer>
  )
}
