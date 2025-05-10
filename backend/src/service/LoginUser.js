import { compare } from 'bcryptjs'
import mongoose from 'mongoose'
import { UserModel } from '../models/userModel.js'

export async function LoginUser(data){
	const URI = process.env.URI;

	try {	
		await mongoose.connect(URI);

		const user = await UserModel.findOne({ username: data.username });
		
		if(!user){
			return {
				success: false, message: "не существует.."
			}
		}

		const isValid = await compare(data.password, user.password);
		
		if(!isValid){
			return {
				success: false, message: "неправильный пароль.."
			}
		}

		console.log('user: ', user)
		return {
			success: true, message: "успешно..",
			username: user.username
		}

	} catch(err){
		console.error('ERROR: ', err);
	}
}