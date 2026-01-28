'use client'

import { Box, Text } from '@beryl-ui/react'
import { styled } from 'styled-components'

export const Form = styled(Box)`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};

  margin-top: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[4]};

  border-radius: ${({ theme }) => theme.radii.md};

  background-color: ${({ theme }) => theme.colors.gray700};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const FormAnnotation = styled(Text)`
  margin-top: ${({ theme }) => theme.space[2]};

  color: ${({ theme }) => theme.colors.gray400};
`
