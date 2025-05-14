import { makeAutoObservable } from 'mobx'

class AuthStore {
	isAuth: boolean | string

	constructor() {
		makeAutoObservable(this)
		const isAuthLC = localStorage.getItem('syntax_chat.isAuth') || false

		this.isAuth = isAuthLC
	}
}

export const authStore = new AuthStore()
