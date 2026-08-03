import { PrismaClient } from '@prisma/client'

const connectionString = process.env.DATABASE_URL!

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: connectionString,
      },
    },
    log: ['query'],
  })
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma
}
