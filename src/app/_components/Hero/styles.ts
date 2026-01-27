'use client'

import { Heading, Text } from '@beryl-ui/react'
import styled from 'styled-components'

export const HeroContainer = styled.div`
  max-width: 480px;
  padding: 0 ${({ theme }) => theme.space[10]};
`

export const HeroHeading = styled(Heading)`
  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizes['6xl']};
  }
`

export const HeroText = styled(Text)`
  margin-top: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.gray200};
`
