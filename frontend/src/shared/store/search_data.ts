import { makeAutoObservable } from 'mobx'

class Search_header_data {
	query = ''

	constructor() {
		makeAutoObservable(this)
	}

	setData(data: string) {
		this.query = data
	}
}

export const search_header_data = new Search_header_data()
