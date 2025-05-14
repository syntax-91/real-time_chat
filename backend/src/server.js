import cors from 'cors'
import dotenv from 'dotenv'
import express, { json } from 'express'
import { authRoute } from './routes/auth.js'
import { QueryRoute } from './routes/query.js'
import { connectDB } from './service/connectDB.service.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(json())

const PORT = 5000

//auth
app.use('/auth', authRoute)

//query
app.use('/query', QueryRoute)

//404
app.use((req, res) => {
	res.status(404).json({ message: 'Not Found' })
})

const startServer = async () => {
	try {
		await connectDB()
		app.listen(PORT, () => {
			console.log(`Server running as http://localhost:${PORT}`)
		})
	} catch (err) {
		console.log('ERROR: ', err)
	}
}

startServer()
