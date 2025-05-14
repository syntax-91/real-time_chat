import { motion } from 'framer-motion'
import type React from 'react'
import { useNavigate } from 'react-router-dom'
import { authStore } from '../../../shared/store/authStore'

type Menu_props = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Menu_PC(p: Menu_props) {
	const nav = useNavigate()

	return (
		<motion.div
			initial={{ opacity: 0, x: -20, y: -20 }}
			animate={{ opacity: 1, x: 0, y: 5 }}
			className='w-[170px] h-[177px] 
			rounded-2xl border border-[#444]
			cursor-pointer fixed'
			onClick={() => p.setIsOpen(false)}
		>
			{/* Profile */}
			{authStore.isAuth && (
				<div
					onClick={() => nav('/settings/profile')}
					className=' w-[100%] mx-auto h-[35px]
				 rounded-t-2xl
				 backdrop-blur-lg
				 flex justify-center items-center
				 '
				>
					Profile
				</div>
			)}

			{/* settings */}
			<div
				onClick={() => nav('/settings')}
				className=' w-[100%] mx-auto h-[35px]
				 rounded-y-2xl 
				 backdrop-blur-2xl
				 flex justify-center items-center
				 hover:border-white/30'
			>
				Настройки
			</div>
			{/* /settings */}

			{/* about */}
			<div
				onClick={() => nav('/about')}
				className=' w-[100%] mx-auto h-[35px]
				 rounded-y-2xl backdrop-blur-lg
				 hover:bg-black/40 bg_blur 
				 flex justify-center items-center
				 hover:border-white/30'
			>
				о нас
			</div>
			{/* /about */}

			{/* logOut */}
			<div
				onClick={() => nav('/logOut')}
				className=' w-[100%] mx-auto h-[35px]
				 rounded-y-2xl 
				 backdrop-blur-lg
				 flex justify-center items-center'
			>
				LogOut
			</div>
			{/* /баг */}

			<div
				onClick={() => nav('/')}
				className=' w-[100%] mx-auto h-[35px]
				 rounded-b-2xl backdrop-blur-md
				 flex justify-center items-center
				 '
			>
				баг
			</div>
			{/* /баг */}
		</motion.div>
	)
}
