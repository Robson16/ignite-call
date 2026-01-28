'use client'

import { Heading, Text } from '@beryl-ui/react'
import { styled } from 'styled-components'

export const RegisterContainer = styled.main`
  max-width: 572px;
  margin: ${({ theme }) => theme.space[20]} auto
    ${({ theme }) => theme.space[4]};
  padding: 0 ${({ theme }) => theme.space[6]};
`
export const RegisterHeader = styled.div``

export const RegisterHeaderTitle = styled(Heading)`
  line-height: ${({ theme }) => theme.lineHeights.base};
`

export const RegisterHeaderText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.space[6]};

  color: ${({ theme }) => theme.colors.gray200};
`
