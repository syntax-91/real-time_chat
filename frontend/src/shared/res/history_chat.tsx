import axios from 'axios'

export async function History_chat(username: string) {
	try {
		const success_token = localStorage.getItem('success_token_syntax.chat')
		//
		const res = await axios.get(`http://localhost:5000/api/history_chat`, {
			headers: {
				Authorization: `Bearer ${success_token}`,
			},
			params: {
				companion_username: `${username}`,
			},
		})

		if (res.status === 401) {
			console.info('> create_success')
		}

		return res.data
	} catch (err) {
		console.error('ERROR: ', err)
	}
}
