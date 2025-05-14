import { hash } from 'bcryptjs'
import mongoose from 'mongoose'
import { UserModel } from '../models/userModel.js'

export async function AddUser(data) {
	const URI = process.env.URI

	try {
		await mongoose.connect(URI)

		const user = await UserModel.findOne({ username: data.username })

		if (user) {
			console.log('user: ', user)
			return {
				success: false,
				message: 'Уже существует..',
			}
		}

		const HashPsw = await hash(data.password, 10)

		UserModel.create({
			username: data.username,
			password: HashPsw,
		})

		return {
			success: true,
			message: 'Успешно..',
			username: user.username,
		}
	} catch (err) {
		console.log('ERROR: ', err)
	}
}
