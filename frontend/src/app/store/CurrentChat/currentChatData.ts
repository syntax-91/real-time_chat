import { makeAutoObservable } from 'mobx'
import { type IChatProps } from './../../../shared/types/types'

//состаяние - оффлайн, онлайн т.п



class cchDataClass {

	ava = '';
	displayName:string = '';
	/*state: TStateUser = 'offline';
	profileType: TProfile = 'private'*/

	constructor() {
		makeAutoObservable(this)		
	}

	open(data:IChatProps){
		this.ava = data.ava,
		this.displayName = data.displayName
	}
}


export const currentChatDataStore = new cchDataClass()