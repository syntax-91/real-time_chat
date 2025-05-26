import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'
import { AuthRouter } from './routes/auth.route.js'
import { connectDB } from './service/connectDB.service.js'

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000
config()

//auth
app.use('/auth', AuthRouter)

//404
app.use((req, res) => {
	res.status(404).json({ msg: 'Not Found' })
})

const run = async () => {
	await connectDB()

	await app.listen(PORT, (req, res) => {
		console.log(`Server running as http://localhost:${PORT}`)
	})
}

run()
