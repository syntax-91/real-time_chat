import { motion } from 'framer-motion'
import { current_chat_Store } from '../../../shared/store/current_Chat_store'
import s from './../../../shared/styles/UI_styles/current_chat.module.css'

export function Mobile_current_chat() {
	const handleClose = () => {
		current_chat_Store.current_chat_selected = false
	}

	return (
		<motion.div
			initial={{ x: 100 }}
			animate={{ x: 0 }}
			className='w-[100vw] h-[100vh] fixed 
			bg-black/97 || OB'
		>
			<div
				className='m-10 flex
			items-center'
			>
				<span
					className='text-[24px] cursor-pointer
				'
					onClick={handleClose}
				>
					&lt;
				</span>

				<div
					className='w-[45px] h-[45px] bg-white/20
				rounded-[50%] ml-3'
				/>

				<div className='ml-3'>
					<h3>{current_chat_Store.name || 'undefined'}</h3>

					<div className='flex mt-1 item-center'>
						<div
							className={`${
								current_chat_Store.status
									? `${s[current_chat_Store.status]}`
									: s.ind_offline
							}`}
						/>
						{current_chat_Store.status || 'offline'}
					</div>
				</div>
			</div>
		</motion.div>
	)
}
