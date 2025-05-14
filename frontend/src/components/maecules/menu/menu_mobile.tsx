import { motion } from 'framer-motion'
import type React from 'react'
import { Options_menu_mob } from './options_menu_mob'

type Menu_props = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Menu_mob({ setIsOpen }: Menu_props) {
	return (
		<div
			className='w-[100vw] h-[100vh]
			absolute left-0 top-0 || OB bg-white/3'
			onClick={() => setIsOpen(false)}
		>
			<motion.div
				initial={{ x: -100 }}
				animate={{ x: 0 }}
				className='bg-[#0c0c0c] w-[80%] max-w-[350px] h-[100%] rounded-2xl '
			>
				<div
					className='bg
				w-[100%] h-[115px] bg-[#484848]
				rounded'
				/>
				<div
					className='bg-[#575555]/95 w-[80px] h-[80px]
					relative top-[-30px]  mx-auto rounded-[50%]'
				/>

				<Options_menu_mob />
			</motion.div>
		</div>
	)
}
