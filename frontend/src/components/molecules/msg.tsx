import { observer } from 'mobx-react-lite'
import type { IMsgsProps } from '../../shared/types/types'

 function MsgCurrentChat(msgData: IMsgsProps){

	
	return (
		<div className='flex items-center gap-3 max-w-[50%] m-4'>
			
			{/* AVA */}
			<div className='bg-white/30 flex justify-center items-center p-3 rounded-[50%] '>
				<img src={msgData.ava} alt="img" />
			</div>

			{/* msg */}
			<div className='  bg-[#1d1d1d] border
		rounded-3xl border-[#444] flex justify-center items-center
		mt-3 py-3 pt-10 px-4 relative'>

			<span className='absolute top-2 left-3 text-emerald-600'>
				{msgData.who}</span>
			
			{msgData.text} 
		</div>

		</div>
	) 
}

export default observer(MsgCurrentChat)