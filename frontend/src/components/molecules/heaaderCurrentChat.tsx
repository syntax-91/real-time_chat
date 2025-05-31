import { BiArrowBack } from 'react-icons/bi'
import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatData'
import { CurrentChatMobileStore } from '../../app/store/CurrentChat/isOpenCurrentChatMobile'

export function HeaderCurrentChat(){

	const handleClose = () => {
		CurrentChatMobileStore.closeCurrentChatMobile()
	}

	return (
		<div className='w-[100%] h-[50px] _fixed top-0 bg-white/8
		flex items-center px-[10px]'>
				
				<div
				onClick={handleClose}>
					<BiArrowBack color='#fff' size={25} />
				</div>

				<div className='w-[35px] h-[35px] bg-white/30 rounded-[50%] mx-5 flex justify-center items-center'>
					<img src={currentChatDataStore.ava} alt="img" />
				</div>

				<div>
					<p>{currentChatDataStore.displayName}</p>
				</div>


		</div>
	)
}