import { Metadata } from 'next'
import Image from 'next/image'

import HomeIntro from '@/app/_components/HomeIntro'
import { Container, Preview } from '@/app/_styles/pages/home'

export const metadata: Metadata = {
  title: 'Descomplique sua agenda',
  description:
    'Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.',
}

export default function Home() {
  return (
    <Container>
      <HomeIntro />
      <Preview>
        <Image
          src="/app-preview.png"
          alt="Ignite Call Preview"
          width={748}
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
