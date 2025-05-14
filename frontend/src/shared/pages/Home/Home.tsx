import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import { Chats } from '../../../components/organisms/chats/chats'
import Current_chat from '../../../components/organisms/current_chat/current_chat'
import { Mobile_current_chat } from '../../../components/organisms/current_chat/mobile_current_chat'
import { Header } from '../../../components/organisms/header/Header'
import Res_search from '../../../components/organisms/res_search/res_search'
import { authStore } from '../../store/authStore'
import { current_chat_Store } from '../../store/current_Chat_store'
import { search_header_data } from '../../store/search_data'

function Home() {
	const nav = useNavigate()

	console.log('search_data: ', search_header_data.query)
	const isMobile = useMediaQuery({ maxWidth: 700 })

	useEffect(() => {
		if (!authStore.isAuth) {
			nav('/login')
		}
	}, [])

	return (
		<motion.div
			initial={{ opacity: 0, y: -30, x: -30 }}
			animate={{ opacity: 1, y: 0, x: 0 }}
			className='md:m-10 flex'
		>
			<div
				className='b1  w-[100%] md:w-[400px]
			justify-between items-center md:border border-[#101010]
			p-2 rounded-2xl h-[100vh] md:h-[90vh]'
			>
				<Header />

				{search_header_data.query.length > 0 && <Res_search />}

				<Chats />
			</div>

			<div
				className='b2 w-full || current-chat hidden md:block
			'
			>
				<Current_chat />
			</div>

			{current_chat_Store.current_chat_selected && isMobile && (
				<Mobile_current_chat />
			)}
		</motion.div>
	)
}

export default observer(Home)
