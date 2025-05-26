import jwt from 'jsonwebtoken'

export async function createRefresh(username) {
	const REFRESH_SECRET = process.env.REFRESH_SECRET

	try {
		const TOKEN = jwt.sign(username, REFRESH_SECRET, { expiresIn: '30d' })

		return TOKEN
	} catch (err) {
		console.log('ERROR > ', err)
	}
}
