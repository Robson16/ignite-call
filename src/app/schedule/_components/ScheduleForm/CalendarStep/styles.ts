'use client'

import { Box, Text } from '@beryl-ui/react'
import { css, styled } from 'styled-components'

interface ContainerProps {
  $isTimePickerOpen: boolean
}

export const Container = styled(Box)<ContainerProps>`
  position: relative;
  display: grid;
  max-width: 100%;
  margin: ${({ theme }) => theme.space[6]} auto 0;
  padding: 0;

  ${({ $isTimePickerOpen }) =>
    $isTimePickerOpen
      ? css`
          grid-template-columns: 1fr 280px;

          @media (max-width: 900px) {
            grid-template-columns: 1fr;
          }
        `
      : css`
          width: 540px;
          grid-template-columns: 1fr;
        `}
`

export const TimePicker = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.gray600};
  padding: ${({ theme }) => theme.space[6]} ${({ theme }) => theme.space[6]} 0;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 280px;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.space[1]};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray700};
    border-radius: ${({ theme }) => theme.radii.full};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray600};
    border-radius: ${({ theme }) => theme.radii.full};
  }

  @media (max-width: 900px) {
    position: static;
    width: 100%;

    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.colors.gray600};
    padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[6]};
  }
`

export const TimePickerHeader = styled(Text)`
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  span {
    color: ${({ theme }) => theme.colors.gray200};
  }
`

export const TimePickerList = styled.div`
  margin-top: ${({ theme }) => theme.space[3]};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[2]};

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const TimePickerItem = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.colors.gray600};
  padding: ${({ theme }) => theme.space[2]} 0;
  color: ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.base};
  cursor: pointer;

  &:last-child {
    margin-bottom: ${({ theme }) => theme.space[6]};
  }

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
