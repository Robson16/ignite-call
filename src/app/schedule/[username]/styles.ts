'use client'

import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 852px;
  padding: 0 ${({ theme }) => theme.space[4]};
  margin: ${({ theme }) => theme.space[20]} auto
    ${({ theme }) => theme.space[4]};
`
