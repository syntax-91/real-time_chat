import { RoomModel } from '../models/RoomModel.js'

export async function MsgsService(roomID){
	try {	

		const resDB = await RoomModel.findOne({
			roomID: roomID
		})

		if(!resDB){
			console.log('что-то пошло не так! ')
			return {
				success: false,
				msg: 'что-то пошло не так!!!'
			}  
		}

			const msgsJSON = JSON.parse(JSON.stringify(resDB.msgs))

		return {
			success: true,
			msgs: msgsJSON
		}

	} catch(err){
		console.log("ERROR > ", err)
	}

}