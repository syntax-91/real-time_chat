import { makeAutoObservable } from 'mobx'

class userDataStoreClass {
	
	userName: string = 'syntax'
	displayName: string = 'syntax_yopta'

	constructor() {
		makeAutoObservable(this)
	}
}

export const userDataStore = new userDataStoreClass()