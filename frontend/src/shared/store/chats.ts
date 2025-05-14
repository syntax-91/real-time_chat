import { makeAutoObservable } from 'mobx'
import type { TChat_props } from '../types/types'

class ChatsStore {
	chats: TChat_props[] = []

	constructor() {
		makeAutoObservable(this)
	}
}

export const chats_Store = new ChatsStore()
