import { makeAutoObservable } from 'mobx'

class Search_result {
	success = false
	result = []

	constructor() {
		makeAutoObservable(this)
	}
}

export const search_result = new Search_result()
