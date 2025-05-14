import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { History_chat } from '../../../shared/res/history_chat'
import { current_chat_Store } from '../../../shared/store/current_Chat_store'
import { TMsgs } from '../../../shared/types/types'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/Input'
import s from './../../../shared/styles/UI_styles/current_chat.module.css'

function Current_chat() {
	const [send_text, set_Send_Text] = useState('')
	const [msgs, setMsgs] = useState<TMsgs>([])

	const handle_close = () => {
		current_chat_Store.current_chat_selected = false
	}

	useEffect(() => {
		if (current_chat_Store.current_roomID) {
			History_chat(current_chat_Store.username)
				.then(e => setMsgs(e))
				.catch(err => console.error('ERR: ', err))
		}
	}, [])

	const send_msg = () => {}

	return (
		<motion.div
			initial={{ x: 100 }}
			animate={{ x: 0 }}
			className='w-[100%] h-[90vh]
			border border-[#101010] rounded-2xl ml-2'
		>
			{!current_chat_Store.current_chat_selected && (
				<div
					className='w-[100%] h-[100%] 
				flex justify-center items-center'
				>
					<div
						className='bg-[#080808] backdrop-blur-lg py-2 px-5 
					rounded-2xl'
					>
						<h2>для начала общение, нажмите на чат..</h2>
					</div>
				</div>
			)}

			{/* selected */}
			{current_chat_Store.current_chat_selected && (
				<div
					className='w-[100%] h-[100%] relative 
				'
				>
					<div
						className='bg-[#111010] py-2 px-5 
					rounded-2xl main || current_chat_header
					flex items-center'
					>
						<span
							className='text-[24px] cursor-pointer
				'
							onClick={handle_close}
						>
							&lt;
						</span>

						<div
							className='w-[40px] h-[40px]
						ml-3 bg-white/30 rounded-[50%]
						flex justify-center items-center'
						>
							<img src={current_chat_Store.ava} alt='img' />
						</div>

						<div>
							<h3 className='ml-3'>{current_chat_Store.name || 'undefined'}</h3>

							<div className='flex items-center ml-4'>
								<div
									className={`${
										current_chat_Store.status
											? `${s[current_chat_Store.status]}`
											: s.ind_offline
									}`}
								/>
								<h3 className='ml-3'>
									{current_chat_Store.status || 'offline'}
								</h3>
							</div>
						</div>

						<div>
							{msgs.map(d => (
								<h3>{d}</h3>
							))}
						</div>

						<div
							className='border border-[#444]
							w-[100%] h-[40px] absolute bottom-0
							left-0 rounded flex'
						>
							<Input
								placeholder='Enter text'
								value={send_text}
								onChange={e => set_Send_Text(e.target.value)}
								size='w-full'
							/>

							<Button label='send' onClick={send_msg} />
						</div>

						{/**/}
					</div>
				</div>
			)}
		</motion.div>
	)
}

export default observer(Current_chat)
