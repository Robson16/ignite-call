import Image from 'next/image'

import HomeIntro from '@/app/_components/HomeIntro'
import { Container, Preview } from '@/app/_styles/pages/home'

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
