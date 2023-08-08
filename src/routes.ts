import {Router} from 'express'
import authRoute from './auth/auth.route'
import memesRoute from './memes/memes.route'

const router = Router()

router.use('/auth', authRoute)
router.use('/memes', memesRoute)

export default router