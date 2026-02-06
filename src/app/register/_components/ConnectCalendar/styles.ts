import { Box, Text } from '@beryl-ui/react'
import styled from 'styled-components'

export const ConnectCalendarContainer = styled.div``

export const ConnectCalendarBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};

  margin-top: ${({ theme }) => theme.space[6]};
`

export const ConnectCalendarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[2]};

  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: ${({ theme }) => theme.radii.md};
`

export const AuthError = styled(Text)`
  margin-bottom: ${({ theme }) => theme.space[4]};

  color: '#f75a68';
`
