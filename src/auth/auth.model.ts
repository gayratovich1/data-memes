import Joi from "joi";

const registerScheme = Joi.object({
    nickname: Joi.string().required(),
    password: Joi.string().required
})

export default {
    registerScheme
}