import axios from 'axios'
import Cookies from 'js-cookie'
import { modalStore } from '../app/store'
import type { TUser } from '../shared/types/types'

export async function LoginFetch(data: TUser) {
	try {
	
		const res = await axios.post('http://localhost:3000/auth/login', data, {
			withCredentials: true
		})

		if (res.data.success) {
			localStorage.setItem('isAuth_syntax_chat', 'true')
			localStorage.setItem('syntax_chat_username', `${data.username}`)
			return res.data.success
		}


		console.log("DDD: ", res.data.msg)
		modalStore.run(res.data.msg, res.data.success)

		console.info(res.data)
	} catch (err) {
		console.error('ERROR: ', err)
	}
}


/* create ACCESS */
export async function createACCESS(){
	try {
		const REFRESH_TOKEN = Cookies.get('syntax_chat_REFRESH_TOKEN');
		
		console.log("DD: ", REFRESH_TOKEN)

		const res = await axios.post('http://localhost:3000/createACCESS', REFRESH_TOKEN)

		console.info("ответ dataAPI > ", res.data)

		if(!res.data.accessValid){
			console.error('refresh истёк...')
		}

	} catch(err){
		console.error("ERROR > ", err)
	}
}