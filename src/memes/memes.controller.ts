import { NextFunction, Request, Response } from "express";
import memesService from "./memes.service";
import createHttpError from "http-errors";

const createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, description } = req.body
        const file = req.file

        if (!file) {
            throw createHttpError(400, 'File not found')
        }

        const post = await memesService.createPost({
            id: +id,
            description,
            image: file.path
        })

        res.status(201).send({
            message: 'Post created',
            post
        })
    }
    catch (e) {
        next(e)
    }
}

export default {
    createPost
}