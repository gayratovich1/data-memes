import {Router} from 'express'
import upload from '../common/uploadFile.middleware'
import memesController from './memes.controller'

const router = Router()

router.post('/', upload.single('img'), memesController.createPost)

export default router