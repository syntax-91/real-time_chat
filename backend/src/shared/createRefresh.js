import jwt from 'jsonwebtoken'

export function createRefresh(username){	
	const REFRESH_SECRET = process.env.REFRESH_SECRET;
	const token = jwt.sign(
		{username: username},  
		REFRESH_SECRET, 
		{expiresIn: '30d'}
	)

	console.log('your token: ', token);

	return token;
}