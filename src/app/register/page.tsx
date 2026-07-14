import { Suspense } from 'react'

import { RegisterForm } from './_components/RegisterForm'
import { Skeleton } from './_components/Skeleton'
import { Container, Header, HeaderText, HeaderTitle } from './styles'

export default function RegisterPage() {
  return (
    <Container>
      <Header>
        <HeaderTitle as="strong">Bem-vindo ao Ignite Call!</HeaderTitle>
        <HeaderText>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </HeaderText>
      </Header>

      <Suspense fallback={<Skeleton />}>
        <RegisterForm />
      </Suspense>
    </Container>
  )
}
