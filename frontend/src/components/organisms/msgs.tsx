import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatData'
import MsgCurrentChat from '../molecules/msg'

 function MsgsCurrentChat() {

	const plainMsgsObj = toJS(currentChatDataStore.msgs)
	const MsgsArr = Object.values(plainMsgsObj);
	console.info('msgs)): ', plainMsgsObj)
	

	return (
		<> 
		{currentChatDataStore.msgs &&
		currentChatDataStore.msgs.map((msg, idx) => (
			<div key={idx} className='w-[95%] mx-auto'>
				<MsgCurrentChat 
					text={msg.text}
					ava={msg.ava}   
					who={msg.who} 
					msgID={msg.msgID}
				/> 
			</div> 
	)) }

	{!currentChatDataStore.msgs && 
		<div>  
			Loading..  
		</div> 
	}

		</>	 
	)
} 

export default observer(MsgsCurrentChat) 