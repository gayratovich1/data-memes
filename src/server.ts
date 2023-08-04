import { config } from 'dotenv'
config()
import express from 'express'
import cors from 'cors'
import router from './auth/auth.route'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


const PORT = process.env.PORT || 3000

app.use('/api/v1', router)

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`)
})