import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'
import { modalStore } from '../../app/store'
import { Modal } from '../../components/molecules/modal'

 function Layout() {


	return (
		<div className='w-[100vw] h-[100vh]'>
			{modalStore.isOpen && (
				<div
					className='w-[100%] h-[100%]
				fixed z-100'
				>
					<Modal
						msg={modalStore.msg}
					/>
				</div>
			)}

			<Outlet />
		</div>
	)
}

export default observer(Layout)