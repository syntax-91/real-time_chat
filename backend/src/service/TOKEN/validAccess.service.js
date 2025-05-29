import jwt from 'jsonwebtoken'

export async function ValidAccess(token){
	const SECRET = process.env.ACCESS_SECRET;

	try {
		const decoded = jwt.verify(token, SECRET)
		return {
		success: true, data: decoded
		}
	} catch(err){
		return {
			success: false, msg: 'Невалидный токен', err: err
		}
	}
}