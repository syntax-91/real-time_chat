import { makeAutoObservable } from 'mobx'

class SearchQuery {
	
	query = ''

	constructor() {
		makeAutoObservable(this)
	}

	setQuery(text: string){
		this.query = text
	}
}

export const searchQueryStore = new SearchQuery();