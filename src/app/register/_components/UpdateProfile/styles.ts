import { Box, Text } from '@beryl-ui/react'
import styled from 'styled-components'

export const UpdateProfileContainer = styled.div``

export const UpdateProfileBox = styled(Box)`
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

export const FormAnnotation = styled(Text)`
  color: ${({ theme }) => theme.colors['gray200']};
`
