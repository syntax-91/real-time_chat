import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { routesConfig } from '../../app/config/routesConfig'
import { selectedCurrentChatStore } from '../../app/store/CurrentChat/selectedCurrentChat'
import { isOpenMenuDesktop } from '../../app/store/isOpenMenu/isOpenMenuDesktop'
import { isOpenMenuMobile } from '../../app/store/isOpenMenu/isOpenMenuMobile'
import Block1 from '../../components/organisms/Block1'
import { CurrentChat } from '../../components/organisms/currentChat/currentChat'
import MenuDesktop from '../../components/organisms/menu/menuDesktop'
import MenuMobile from '../../components/organisms/menu/menuMobile'

 function Home() {
	const nav = useNavigate()
	const isAuth = localStorage.getItem('isAuth_syntax_chat')

	useEffect(() => {
		if (!isAuth == true) { 
			nav(`${routesConfig.Login.path}`)
		}
	}, [])

	

	return (
		<div className='w-[95%] sm:w-[80%] mx-auto  
		h-[100vh]'>
				
				{/* Block1 - header, chats */}
				<div className=' w-[100%] md:w-[300px]'>
					<Block1 />
					
					{isOpenMenuMobile.isOpenMenuMobile && <MenuMobile />}

					{isOpenMenuDesktop.isOpenMenuDesktop && <MenuDesktop />}
				</div>

				{/* Block2 - currentChat */}

				<div>	
					{selectedCurrentChatStore.selectedCurrentChat &&
					<CurrentChat />}

					{!selectedCurrentChatStore.selectedCurrentChat &&
					<div>
						выберите чат
					</div>}
					
				</div>

		</div>
	)
}

export default observer(Home)