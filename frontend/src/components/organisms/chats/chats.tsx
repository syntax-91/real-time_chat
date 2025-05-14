import { motion } from 'framer-motion'
import { chats_Store } from '../../../shared/store/chats'

export function Chats() {
	return (
		<motion.div
			initial={{ opacity: 0, x: -30 }}
			animate={{ opacity: 1, x: 0 }}
			className='w-[100%]'
		>
			{!chats_Store.chats.length && (
				//
				<h2 className='text-center my-10'>ну это.., тут пока пусто</h2>
			)}
		</motion.div>
	)
}
