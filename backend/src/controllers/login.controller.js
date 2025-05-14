import { createRefresh } from '../shared/createRefresh.js'
import { LoginUser } from './../service/LoginUser.js'

export const LoginController = (req, res) => {
	const data = req.body
	console.log('req: ', data)
	const REFRESH_SECRET = process.env.REFRESH_SECRET

	LoginUser(data).then(e => {
		console.log('data: ', e)

		if (e.success) {
			res.cookie('REFRESH_TOKEN', createRefresh(e.username), {
				httpOnly: true,
				secure: true,
				sameSite: 'Strict',
				maxAge: 30 * 24 * 60 * 60 * 1000, //30day
			})
		}

		res.json({ success: e.success, message: e.message })
	})
}
