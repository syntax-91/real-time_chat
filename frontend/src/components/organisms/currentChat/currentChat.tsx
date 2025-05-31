import { useEffect, useState } from 'react'
import socket from '../../../app/socket/socket'
import { userDataStore } from '../../../app/store/userData'
import { HeaderCurrentChat } from '../../molecules/heaaderCurrentChat'

type TMsg = {
	text: string,
	who: string,
	roomID: string,
}

export function CurrentChat() {

	const mainC_styles = 'bg-black/98 w-[100vw] h-[100vh] fixed top-0 left-0 || fn'

	const [msgs, setMsgs] = useState<TMsg[]>([])
	const [roomID, setRoomID] = useState<string>('')
	const [msg, setMsg] = useState<string>('')



	useEffect(() => {
		socket.on('connect', () => {
			console.log('Connected HUIIII socket zaibal')
		})

			socket.on('message', (msg: TMsg) => {
				setMsgs(prevMsg => [...prevMsg, msg] )
		})

		return () => {
			socket.off('socket off')
		}
	}, [])

	const joinRoom = (roomID: string) => {
		socket.emit(
			'joinRoom', 
			roomID
		)
	}

	const sendMsg = () => {
		
		socket.emit('Message', {
			roomID: roomID,
			text: msg,
			who: userDataStore.displayName
		})
		
	}


	return (
		<div className={mainC_styles}>
			<HeaderCurrentChat />
			
		HUI
				 

		</div>
	)
}