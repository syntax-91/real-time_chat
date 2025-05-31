import { makeAutoObservable } from 'mobx'
import { type IChatProps, type IMsgsProps } from './../../../shared/types/types'

//состаяние - оффлайн, онлайн т.п



class cchDataClass {

	ava = '';
	displayName:string = '';
	roomID: string  = '';
	/*state: TStateUser = 'offline';
	profileType: TProfile = 'private'*/
	msgs: IMsgsProps[] = []
	loading = true

	constructor() {
		makeAutoObservable(this)		
	}

	open(data:IChatProps){ 
		this.ava = data.ava,
		this.displayName = data.displayName;
		this.roomID = data.roomID
	}

	setMsgs(msgsData: IMsgsProps[]){
		this.msgs = msgsData
	}

	closeLoading(){
		this.loading = false
	}

} 


export const currentChatDataStore = new cchDataClass()