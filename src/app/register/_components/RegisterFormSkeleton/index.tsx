'use client'

import { Text } from '@beryl-ui/react'

import { SkeletonBox } from './styles'

export function RegisterFormSkeleton() {
  return (
    <SkeletonBox>
      <Text>Carregando formulário...</Text>
    </SkeletonBox>
  )
}
