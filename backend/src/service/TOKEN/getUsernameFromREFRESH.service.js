import jwt from 'jsonwebtoken'

export function getUsernameFromRefreshToken(token){
	const SECRET = process.env.REFRESH_SECRET;

	try {
		const payload = jwt.verify(token, SECRET)
		return payload.username
	} catch(e){
		null
	}

}