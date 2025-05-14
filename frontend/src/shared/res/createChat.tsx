import axios from 'axios'

export async function Create_chat(username: string) {
	try {
		const res = await axios.post('http://localhost:5000/api/create_chat')
	} catch (err) {
		console.error('ERROR: ', err)
	}
}
