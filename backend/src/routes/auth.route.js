import { Router } from 'express'
import { createRefresh } from '../service/createRefresh.service.js'
import { LoginService } from '../service/login.service.js'

export const AuthRouter = Router()

// /auth
AuthRouter.get('/', (req, res) => {
	res.json({
		msg: 'Yo Yo Yo 1-4-8 3 to the 3 to the 6 to the 9. Representing the ABQ. What up BIATCH! Leave at the tone. ',
	})
})

// /auth/login

AuthRouter.post('/login', (req, res) => {
	console.log('req.body >  ', req.body)
	const data = req.body

	LoginService(data).then(e => {
		res.json({
			success: e.success,
			msg: e.msg,
		})

		if (req.success) {
			res.cookie('syntax_chat_REFRESH_TOKEN', createRefresh(data.username), {
				httpOnly: true,
				sameSite: 'strict',
				secure: true,
				maxAge: 30 * 24 * 60 * 60 * 1000,
			})
		}
	})
})
