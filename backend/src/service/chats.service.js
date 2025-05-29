import { UserModel } from '../models/UserModel.js'

export async function ChatsService(username){
	try {
		const res = await UserModel.findOne({
			username: username
		})

		const resJSON = JSON.parse(JSON.stringify(res))

		console.log('chats result: ', resJSON.chats)

		if(!res){
			return {
				success: false,
				msg: 'пусто',
				chats: null
			}
		}

		return {
			success: true,
			msg: 'успешно',
			chats:  resJSON.chats
		}
		
	} catch(err){
		console.error("ERROR > ", err)
	}
}