import prisma from "../prisma/prisma.service"

type createPostType = {
    id: number
    image: string
    description: string
}

const createPost = async (data: createPostType) => {
    const post = await prisma.multipart.create({
        data: {
            ...data
        }
    })

    return post
}

export default {
    createPost
}