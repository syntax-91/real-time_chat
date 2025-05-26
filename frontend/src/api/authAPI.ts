import axios from 'axios'
import { modalStore } from '../app/store'
import type { TUser } from '../shared/types/types'

export async function loginFetch(data: TUser) {
	try {
		const res = await axios.post('http://localhost:3000/auth/login', data)

		if (res.data.success) {
			localStorage.setItem('isAuth_syntax_chat', 'true')
			//location.href = '/'
		}

		modalStore.run(res.data.message, res.data.success)

		console.info(res.data)
	} catch (err) {
		console.error('ERROR: ', err)
	}
}
