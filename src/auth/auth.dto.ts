import {User} from '@prisma/client'

export const userDto = (payload: any): Omit<User, 'password'> => {
    return {
        id: payload.id,
        name: payload.name,
        surname: payload.surname,
        nickname: payload.nickname,
        verified: payload.verified
    }
}