import { observer } from 'mobx-react-lite'
import type { IChatProps } from '../../shared/types/types'

 function Chat(
	{ ava, displayName, latestMsg, ...rest }:IChatProps
){

	const stylesChat = 'border px-3 py-3 my-2 rounded-2xl border-[#444] || fn hover:bg-[#403f3f] cursor-pointer bg-[#2b2a2a] flex gap-2 active:bg-white/20'


	const handleClick = async() => {
	
 
	}

	return (
	<div className={stylesChat}
	onClick={handleClick}>
				 
		 <div
		  className='ava w-[35px] h-[35px] bg-white/30
			
			 rounded-[50%] flex justify-center items-center'>
				<img src={ava} alt="img" />
		 </div>

			<div>
				<p>{displayName} </p>
				{latestMsg || 'latest Message'}
			 </div>
		</div>
	)
}

export default observer(Chat)