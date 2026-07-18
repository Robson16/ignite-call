import { Suspense } from 'react'

import { Skeleton } from '../_components/Skeleton'
import { UpdateProfile } from '../_components/UpdateProfile'
import { Container, Header, HeaderText, HeaderTitle } from '../styles'

export default function UpdateProfilePage() {
  return (
    <Container>
      <Header>
        <HeaderTitle as="strong">Quase lá</HeaderTitle>
        <HeaderText>
          Por último, uma breve descrição e uma foto de perfil.
        </HeaderText>
      </Header>

      <Suspense fallback={<Skeleton />}>
        <UpdateProfile />
      </Suspense>
    </Container>
  )
}
