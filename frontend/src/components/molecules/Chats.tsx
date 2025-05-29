import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { ChatsAPI } from '../../api/data'
import { ChatsStore } from '../../app/store/chats'
import type { IChatsProps } from '../../shared/types/types'
import { Chat } from './chat'

 function Chats(){

	useEffect(() => {
		ChatsAPI() 

	}, [])
	
	let chatsArr: IChatsProps[] = []
	
	if(ChatsStore.chats.length !== 0){
		//конвертируем обьект с чатами в массив
			chatsArr = Object.values(ChatsStore.chats[0])
	}

	

	return (
		<div>
			 
			{ChatsStore?.chats.length > 0 && 
			chatsArr.map((chat, idx) => (
					<div key={idx}>
						<Chat
						 ava={chat.ava}
						 displayName={chat.displayName}
						 state={chat.state}
						 profileType={chat.profileType}
						 latestMsg={chat.latestMsg}
						 />
					</div>
			)) }

			{ChatsStore?.chats?.length === 0 && (
				<div className='text-center mt-5'>
					у вас пока что нету чатов
				</div>)
			}


		</div>
	)
}

export default observer(Chats)