'use client'

import { Text } from '@beryl-ui/react'

import { SkeletonBox } from './styles'

export function RegisterSkeleton() {
  return (
    <SkeletonBox>
      <Text>Carregando...</Text>
    </SkeletonBox>
  )
}
