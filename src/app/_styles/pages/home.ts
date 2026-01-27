'use client'

import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[20]};
  align-items: center;

  margin-left: auto;

  max-width: calc(100vw - (100vw - 1160px) / 2);
  height: 100vh;

  overflow-x: hidden;
`

export const Preview = styled.div`
  padding-right: ${({ theme }) => theme.space[8]};

  overflow: hidden;

  @media (max-width: 600px) {
    display: none;
  }
`
