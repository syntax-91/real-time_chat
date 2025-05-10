import cors from 'cors'
import dotenv from 'dotenv'
import express, { json } from 'express'
import { authRoute } from './routes/auth.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(json())

const PORT = 5000;

//auth
app.use('/auth', authRoute)

//404
app.use((req ,res) => {
	res.status(404)
	.json({"message": "Not Found"})
})


app.listen(PORT, () =>  {
	console.log(`Server running as http://localhost:${PORT}`)
})