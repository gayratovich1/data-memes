import { NextFunction, Request, Response } from "express";
import authService from "./auth.service";
import jwt from 'jsonwebtoken'
import createHttpError from "http-errors";
import { User } from "@prisma/client";
import { userDto } from "./auth.dto";

const register = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {name, surname, nickname, password} = req.body
        const id = await authService.register(name, surname, nickname, password)

        res.status(200).send({
            message: 'Register successful',
            id
        })
    }
    catch(e){
        next(e)
    }
}

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { nickname, password } = req.body
        const {password: pass, ...rest} = await authService.login(nickname, password)
        const token = jwt.sign(rest, process.env.JWT_SECRET ?? 'SECRET_KEY')

        res.send({
            message: 'Login successful',
            user: rest,
            token
        })
    }
    catch(e) {
        next(e)
    }
}

const verify = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const token = req.headers.authorization?.split(' ')[1]

        if(!token) {
            throw createHttpError(404, 'Token not found')
        }

        const jwtPayload = await jwt.verify(token, process.env.JWT_SECRET ?? 'SECRET_KEY') as Omit<User, 'password'>

        res.locals = {
            user: {
                id: jwtPayload.id,
                nickname: jwtPayload.nickname,
                verified: jwtPayload.verified
            }
        }

        res.send({
            message: 'Token verified',
            user: userDto(jwtPayload)
        })
    }
    catch(e){
        next(e)
    }
}

export default {
    register,
    login,
    verify
}