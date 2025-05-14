import { useNavigate } from 'react-router-dom'

export default function N_404() {
	const nav = useNavigate()

	return (
		<div
			className='w-[100vw] h-[100vh] 
		 flex justify-center items-center'
		>
			<div>
				<h2 className='text-5xl'>404 Not Found!</h2>
				<br />
				<h3 className='text-center'>
					Go to
					<a className='mx-2' onClick={() => nav('/')}>
						Home
					</a>
				</h3>
			</div>
		</div>
	)
}
