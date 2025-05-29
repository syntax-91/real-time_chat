import axios from 'axios'
import { ChatsStore } from '../app/store/chats'

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