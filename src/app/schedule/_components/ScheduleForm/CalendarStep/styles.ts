'use client'

import { Box } from '@beryl-ui/react'
import { styled } from 'styled-components'

export const Container = styled(Box)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  width: 540px;
  max-width: 100%;
  margin: ${({ theme }) => theme.space[6]} auto 0;
  padding: 0;
`
