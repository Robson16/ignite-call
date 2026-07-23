'use client'

import { Heading as BerylHeading, Text as BerylText } from '@beryl-ui/react'
import { styled } from 'styled-components'

export const UserHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled(BerylHeading)`
  line-height: ${({ theme }) => theme.lineHeights.base};
  margin-top: ${({ theme }) => theme.space[2]};
`

export const Text = styled(BerylText)`
  color: ${({ theme }) => theme.colors.gray200};
`
