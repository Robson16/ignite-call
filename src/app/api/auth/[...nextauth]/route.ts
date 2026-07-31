import NextAuth, { type NextAuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

import { PrismaAdapter } from '@/app/_lib/auth/prisma-adapter'

// TODO: Validar com zod
const googleClientId = process.env.GOOGLE_CLIENT_ID
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET

if (!googleClientId) {
  throw new Error('Missing GOOGLE_CLIENT_ID environment variable.')
}

if (!googleClientSecret) {
  throw new Error('Missing GOOGLE_CLIENT_SECRET environment variable.')
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(),
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
      authorization: {
        params: {
          scope:
            'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar',
        },
      },
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          username: '',
          email: profile.email,
          avatar_url: profile.picture,
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      if (
        !account?.scope?.includes('https://www.googleapis.com/auth/calendar')
      ) {
        return '/register/connect-calendar/?error=permissions'
      }

      return true
    },

    async session({ session, user }) {
      return {
        ...session,
        user,
      }
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
