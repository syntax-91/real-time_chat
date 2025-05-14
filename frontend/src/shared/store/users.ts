import { makeAutoObservable } from 'mobx'

type TProps = {
	username: string
	ava: string
	display_name: string
	isOnline: boolean
}

class Users {
	users = <TProps {}>[]

	constructor() {
		makeAutoObservable(this)
	}
}

export const users_store = new Users()
