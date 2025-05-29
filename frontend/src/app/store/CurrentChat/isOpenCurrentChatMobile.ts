import { makeAutoObservable } from 'mobx'

class isOpenCCHMobile {

	isOpenCurrentChatMobile = false;

	constructor() {
		makeAutoObservable(this)	
	}

	openCurrentChatMobile(){
		this.isOpenCurrentChatMobile = true
	}

	closeCurrentChatMobile(){
		this.isOpenCurrentChatMobile = false
	}
}

export const CurrentChatMobileStore = new isOpenCCHMobile();