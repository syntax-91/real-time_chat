import { makeAutoObservable } from 'mobx'

class SelectedCurrentChat {
	
	selectedCurrentChat: boolean = false

	constructor() {
		makeAutoObservable(this)	
	}

	setSelectedCurrentChat(value: boolean) {
		this.selectedCurrentChat = value
	}

}

export const selectedCurrentChatStore = new SelectedCurrentChat()