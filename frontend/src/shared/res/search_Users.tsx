import axios from 'axios'
import { search_header_data } from '../store/search_data'
import { search_result } from '../store/search_result'

export async function Search_users() {
	try {
		const api = axios.create({
			baseURL: 'http://localhost:5000',
		})
		console.log('search_: ', search_header_data.query)
		const res = await api.get('/query/users', {
			params: { query: search_header_data.query },
		})

		if (!res.data.success) {
			search_result.success = false
		}
		console.info('search_res_: ', res.data)
		search_result.result = res.data
		search_result.success = true
	} catch (err) {
		console.error('ERROR > ', err)
	}
}
