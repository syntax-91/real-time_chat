import axios from 'axios'
import { messStore } from '../store/messStore'
import type { UserData } from '../types/types'

export async function FetchData(data: UserData) {
	try {
		const res = await axios.post('http://localhost:5000/auth/login', data)

		messStore.run(res.data.success, res.data.message)
		if (res.data.success) {
			localStorage.setItem('syntax_chat.isAuth', 'true')
			location.href = '/'
		}
		//
	} catch (err) {
		console.error('ERROR: ', err)
	}
}
