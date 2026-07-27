'use client'

import { Text } from '@beryl-ui/react'
import styled from 'styled-components'

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
  padding: ${({ theme }) => theme.space[6]};
`

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CalendarTitle = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: capitalize;

  & span {
    color: ${({ theme }) => theme.colors.gray200};
  }
`

export const CalendarActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.gray200};

  & button {
    all: unset;
    cursor: pointer;
    line-height: 0;
    border-radius: ${({ theme }) => theme.radii.sm};

    svg: {
      width: ${({ theme }) => theme.space[5]};
      height: ${({ theme }) => theme.space[5]};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.gray100};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gray100};
    }
  }
`

export const CalendarBody = styled.table`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.default};
  border-spacing: 0.25rem;
  table-layout: fixed;

  & thead th {
    color: ${({ theme }) => theme.colors.gray200};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  & tbody:before {
    content: '.';
    display: block;
    line-height: 0.75rem;
    color: ${({ theme }) => theme.colors.gray800};
  }

  & tbody td {
    box-sizing: border-box;
  }
`

export const CalendarDay = styled.button`
  all: unset;
  width: 100%;
  aspect-ratio: 1/1;
  background: ${({ theme }) => theme.colors.gray600};
  text-align: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.sm};

  &:disabled {
    background: none;
    cursor: default;
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.gray500};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gray100};
  }
`
