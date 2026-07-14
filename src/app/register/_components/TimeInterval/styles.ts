import { Box, Text } from '@beryl-ui/react'
import styled from 'styled-components'

export const TimeIntervalContainer = styled.div``

export const TimeIntervalBox = styled(Box)`
  display: flex;
  flex-direction: column;

  margin-top: ${({ theme }) => theme.space[6]};
`

export const TimeIntervalsContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors['gray600']};
  border-radius: ${({ theme }) => theme.radii.md};

  margin-bottom: ${({ theme }) => theme.space[4]};
`

export const TimeIntervalItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors['gray600']};
  }
`
export const TimeIntervalDay = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
`

export const TimeIntervalInputs = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};

  input::-webkit-calendar-picker-indicator {
    filter: invert(100%) brightness(40%);
  }
`
