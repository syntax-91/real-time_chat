import { compare } from 'bcryptjs'
import { UserModel } from './../models/UserModel.js'

export async function LoginService(data) {
	try {
		const user = await UserModel.findOne({
			username: data.username,
		})

		if (!user === true) {
			return {
				success: false,
				msg: 'Не найдено!',
			}
		}

		const PSW_isVALID = await compare(data.password, user.password)

		if (PSW_isVALID) {
			return {
				success: true,
				msg: 'Успех!',
			}
		}

		if (!PSW_isVALID) {
			return {
				success: false,
				msg: 'что-то пошло не так!',
			}
		}
	} catch (err) {
		console.log('ERROR > ', err)
	}
}
