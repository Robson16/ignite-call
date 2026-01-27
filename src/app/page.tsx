import Image from 'next/image'

import Hero from '@/app/_components/Hero'
import { Container, Preview } from '@/app/_styles/pages/home'

export default function Home() {
  return (
    <Container>
      <Hero />
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
