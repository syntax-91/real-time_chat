import { Outlet } from 'react-router-dom'
import { modalStore } from '../../app/store'
import { Modal } from '../../components/syntax.UIkit/modal'

export default function Layout() {
	return (
		<div className='w-[100vw] h-[100vh]'>
			{modalStore.isOpen && (
				<div
					className='w-[100%] h-[100%] bg-red-900
				fixed z-100'
				>
					<Modal
						title={modalStore.title}
						msg={modalStore.msg}
						autoClose={true}
						autoCloseDuration={3000}
						setIsOpen={modalStore.setIsOpen}
					/>
				</div>
			)}

			<Outlet />
		</div>
	)
}
