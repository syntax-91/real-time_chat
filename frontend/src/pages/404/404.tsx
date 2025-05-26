import { Link } from 'react-router-dom'
import { routesConfig } from '../../app/config/routesConfig'

export default function _404() {
	return (
		<div className='w-[100vw] h-[100vh] flex justify-center items-center'>
			<h1>404 Not Found</h1>
			<p>
				Go to <Link to={routesConfig.Home.path}>Home</Link>
			</p>
		</div>
	)
}
