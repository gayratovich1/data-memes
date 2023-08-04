import createHttpError from "http-errors"
import prisma from "../prisma/prisma.service"
import bcrypt, { hash } from 'bcrypt'

const register = async (nickname: string, password: string) => {
    const findUser = await prisma.user.findUnique({
        where: {
            nickname
        }
    })

    if(findUser) {
        throw createHttpError(409, 'Nickname already taken')
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
        data: {
            nickname,
            password: hashPassword,
            verified: true
        }
    })

    return user
}

export default {
    register,
}