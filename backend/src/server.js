import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'
import { AuthRouter } from './routes/auth.route.js'
import { ChatsRouter } from './routes/chats.route.js'
import { createAccessRouter } from './routes/createACCESS.route.js'
import { msgsRouter } from './routes/msgs.route.js'
import { SendMsgRouter } from './routes/sendMsg.route.js'
import { connectDB } from './service/connectDB.service.js'

const app = express()
app.use(express.json())
app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
}))
const PORT = 3000
config()
 
//auth
app.use('/auth', AuthRouter)

//chats
app.use('/chats', ChatsRouter)
 
// getMsgs
app.use('/getMsgs', msgsRouter)

// /sendMsg
app.use('/sendMsg', SendMsgRouter)
 
//createACCESS
app.use('/createACCESS', createAccessRouter)

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
