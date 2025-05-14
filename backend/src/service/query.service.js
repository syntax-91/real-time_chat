import { UserModel } from '../models/userModel.js'

export async function query_Service(query) {
	try {
		const q = await UserModel.find({
			username: { $regex: query.query, $options: 'i' },
		})

		console.log('HUI q > ', q)

		if (q.length === 0) {
			return {
				success: false,
			}
		}

		console.log('HUI > ', q)
		return {
			success: true,
			data: q.map(user => ({
				username: user.username,
			})),
		}
	} catch (err) {
		console.log('ERROR: ', err)
	}
}
