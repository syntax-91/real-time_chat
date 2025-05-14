import { makeAutoObservable, reaction, runInAction } from 'mobx'

class MessStore {
	isOpen = false
	message = ''
	success = false

	constructor() {
		makeAutoObservable(this)

		reaction(
			() => this.isOpen,
			open => {
				if (open) {
					setTimeout(() => {
						runInAction(() => {
							this.isOpen = false
						})
					}, 3000)
				}
			}
		)
	}

	run(success: boolean, message: string) {
		this.isOpen = true
		this.success = success
		this.message = message
	}
}

export const messStore = new MessStore()
