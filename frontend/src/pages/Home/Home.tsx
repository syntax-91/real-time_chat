import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { routesConfig } from '../../app/config/routesConfig'

export default function Home() {
	const nav = useNavigate()
	const isAuth = localStorage.getItem('isAuth_syntax_chat')

	useEffect(() => {
		if (!isAuth == true) {
			nav(`${routesConfig.Login.path}`)
		}
	}, [])

	return (
		<>
			<h2>Hi</h2>
		</>
	)
}
