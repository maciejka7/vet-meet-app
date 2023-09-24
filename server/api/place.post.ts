import { Place, Prisma, PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const placeSchema = z.object({
        title: z.string(),
        description: z.string().nullable(),
        img: z.string().nullable(),
    })

    type DbData = Pick<Place, "img" | "title" | "description">

    const dbData: DbData = {
        title: body.title || null,
        description: body.description || null,
        img: body.img || null
    }

    placeSchema.parse(dbData)

    return await prisma.place.create({
        data: dbData
    })
})