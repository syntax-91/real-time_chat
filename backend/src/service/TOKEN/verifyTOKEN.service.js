import jwt from 'jsonwebtoken'

const REFRESH_SECRET = process.env.REFRESH_SECRET;

export function verifyREFRESH(token){
	try {
	return jwt.verify(token, REFRESH_SECRET)
	} catch(e){
		return null
	}
}