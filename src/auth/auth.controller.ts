import { NextFunction, Request, Response } from "express";
import authService from "./auth.service";

const register = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {nickname, password} = req.body
        console.log(req.body);
        

        const id = await authService.register(nickname, password)

        res.status(200).send({
            message: 'Register successful',
            id
        })
    }
    catch(e){
        next(e)
    }
}

export default {
    register,
}