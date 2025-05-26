import { observer } from 'mobx-react-lite'
import { modalStore } from '../../../app/store'
import { Modal } from '../../../components/molecules/modal'
import { LoginContainer } from '../../../components/organisms/LoginContainer'

function Login() {
	return (
		<div className='w-[100vw] h-[100vh] flex justify-center items-center'>
			{modalStore.isOpen == true && (
				<Modal
					msg={modalStore.msg} ////////
					success={modalStore.success}
				/>
			)}

			<LoginContainer />
		</div>
	)
}

export default observer(Login)
