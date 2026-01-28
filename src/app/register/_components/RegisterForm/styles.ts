import { Box } from '@beryl-ui/react'
import styled from 'styled-components'

export const RegisterFormContainer = styled.div``

export const RegisterFormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};

  margin-top: ${({ theme }) => theme.space[6]};

  label {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[2]};
  }
`
