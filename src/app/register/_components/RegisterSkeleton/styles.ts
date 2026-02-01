import { Box } from '@beryl-ui/react'
import styled from 'styled-components'

export const SkeletonBox = styled(Box)`
  margin-top: ${({ theme }) => theme.space[6]};
  padding: ${({ theme }) => theme.space[6]};
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
`
