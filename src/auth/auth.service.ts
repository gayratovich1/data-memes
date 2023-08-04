import createHttpError from "http-errors"
import prisma from "../prisma/prisma.service"
import bcrypt, { hash } from 'bcrypt'

const register = async (name: string, surname: string, nickname: string, password: string) => {
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
            name,
            surname,
            nickname,
            password: hashPassword,
            verified: true
        }
    })
    
    const { password: _, ...rest } = user

    return user
}

const login = async (nickname: string, password: string) => {
    const findUser = await prisma.user.findUnique({
        where: {
            nickname
        }
    })

    if (!findUser) {
        throw createHttpError(404, 'Nickname not found')
    }

    const compare = await bcrypt.compare(password, findUser.password)

    if(!compare) {
        throw createHttpError(400, 'Password is wrong')
    }

    return findUser
}

export default {
    register,
    login,
}