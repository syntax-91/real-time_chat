import axios from 'axios'
import { ChatsStore } from '../app/store/chats'
import { currentChatDataStore } from '../app/store/CurrentChat/currentChatData'

export async function ChatsAPI() {
	try {
		
		const username = localStorage.getItem('syntax_chat_username')||null;

		 
			const res = await axios.get('http://localhost:3000/chats', { headers: { 
			Authorization: `${username}`
		 } })

		 const chatsData = res.data.chats;

		ChatsStore.setChats(chatsData) 
		
	
	} catch(err){
		console.error("ERROR data.tsx > ", err)
	}
}

//

export async function msgsAPI(){
	
	const roomIDCurrentChat=  currentChatDataStore.roomID;
	console.info('roomID (currentChat): ', roomIDCurrentChat)

	 try {
		
		const res = await axios.get('http://localhost:3000/getMsgs',
			{headers: {Authorization: `${roomIDCurrentChat}`}}
		)
 
		currentChatDataStore.setMsgs(res.data.msgs)
		
		if(res.data.length > 0){
			currentChatDataStore.closeLoading()
		}

	 } catch(err){
		console.error('ERROR > ', err)
	 }
}