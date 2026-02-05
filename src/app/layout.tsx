import { Roboto } from 'next/font/google'

import StyledComponentsRegistry from '@/app/_lib/styled-components-registry'
import NextAuthSessionProvider from '@/app/_providers/session-provider'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Ignite Call',
  description: 'Agendamento descomplicado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className} cz-shortcut-listen="true">
        <NextAuthSessionProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
