'use client'

import { Box, Text } from '@beryl-ui/react'
import { styled } from 'styled-components'

export const ConfirmForm = styled(Box)`
  max-width: 540px;
  margin: ${({ theme }) => theme.space[6]} auto 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};

  label {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[2]};
  }
`

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};

  padding-bottom: ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[2]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
`

export const FormHeaderText = styled(Text)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};

  svg {
    color: ${({ theme }) => theme.colors.gray200};
    width: ${({ theme }) => theme.space[5]};
    height: ${({ theme }) => theme.space[5]};
  }
`

export const FormError = styled(Text)`
  color: #f75a68;
`

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space[2]};
  margin-top: ${({ theme }) => theme.space[2]};
`
