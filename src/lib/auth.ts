import { NextAuthOptions, User, getServerSession } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import { db } from './db'

declare module 'next-auth' {
  interface Session {
    user: User & {
      isAdmin: Boolean
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    isAdmin: Boolean
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  pages: {
    signIn: '/sign-in',
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin
      }
      return session
    },
    async jwt({ token }) {
      const userInDB = await db.user.findUnique({
        where: {
          email: token.email!,
        },
      })
      token.isAdmin = userInDB?.isAdmin!
      return token
    },
  },
}

export const getAuthSession = () => getServerSession(authOptions)
