import { makeAutoObservable, reaction } from 'mobx'
import { IChatsProps } from './../../shared/types/types'

class Chats {
	
	chats: IChatsProps[] = []

	constructor() {
		makeAutoObservable(this)	

		reaction(
			() => this.chats,
			() => console.log('CHATS STORE: ', this.chats)
		)
	}

	setChats(data: IChatsProps){
		this.chats = [data]
	}
}

export const ChatsStore = new Chats();