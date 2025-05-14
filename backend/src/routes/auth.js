import { Router } from 'express'
import { LoginController } from '../controllers/login.controller.js'
import { AddUser } from '../service/addUser.js'
import { createRefresh } from './../shared/createRefresh.js'

export const authRoute = Router()

// /auth
authRoute.get('/', (req, res) => {
	res.status(200).json({ message: 'HUI' })
})

// /auth/login
authRoute.post('/login', LoginController)

// /auth/register
authRoute.post('/register', (req, res) => {
	const data = req.body

	AddUser(data)
		//
		.then(
			//
			e => {
				//
				if (e.success) {
					res.cookie('REFRESH_TOKEN', createRefresh(e.username), {
						httpOnly: true,
						secure: true,
						sameSite: 'Strict',
						maxAge: 30 * 24 * 60 * 60 * 1000, //30day
					})
				}

				res.json({ success: e.success, message: e.message })
			}
		)
})
