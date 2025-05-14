import { makeAutoObservable } from 'mobx'
import type { TCurrent_Chat_props } from '../types/types'

class Current_chat {
	current_chat_selected = false

	current_chat_mob_isOpen = false
	current_roomID = ''
	ava = ''
	name = ''
	status = ''
	username = ''

	constructor() {
		makeAutoObservable(this)
	}

	current_chat_open(data: TCurrent_Chat_props) {
		this.current_chat_selected = true
		this.current_chat_mob_isOpen = true

		this.name = data.name
		this.ava = data.ava
		this.status = data.status
		this.username = data.username
	}

	current_chat_close() {
		this.current_chat_selected = false
	}
}

export const current_chat_Store = new Current_chat()
