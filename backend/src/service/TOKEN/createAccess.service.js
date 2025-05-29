import jwt from 'jsonwebtoken'

export async function createAccessService(username){
	//token => refresh
	
	try {
		const SECRET = process.env.REFRESH_SECRET

		return jwt.sign(	
			{username},
			SECRET,
			{ expiresIn: '30m' }
		)

	} catch(err){
		console.log("ERROR > createAccessService ", err)
	}
}