import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu_mob } from '../../maecules/menu/menu_mobile'
import { Menu_PC } from '../../maecules/menu/menu_PC'
import { Search_header } from '../../maecules/search_header/search_header'
import icon_menu from './../../../assets/icon_menu.png'

export function Header() {
	const [isOpenMenu_PC, setIsOpenMenu_PC] = useState(false)
	const [isOpenMenu_mob, setIsOpenMenu_mob] = useState(false)

	return (
		<div className='w-[90%] mx-auto mt-5'>
			<div
				className='flex
		justify-between items-center '
			>
				{/* PC */}
				<motion.div
					className='hidden md:flex ml-2 cursor-pointer'
					onClick={() =>
						isOpenMenu_PC ? setIsOpenMenu_PC(false) : setIsOpenMenu_PC(true)
					}
				>
					<img src={icon_menu} alt='ICON' />
				</motion.div>

				{/* Mobile */}
				<motion.div
					className='flex md:hidden ml-2 cursor-pointer'
					onClick={() =>
						isOpenMenu_mob ? setIsOpenMenu_mob(false) : setIsOpenMenu_mob(true)
					}
				>
					<img src={icon_menu} alt='ICON' />
				</motion.div>

				<div className='w-[100%] ml-[20px]'>
					<Search_header />
				</div>
			</div>

			{isOpenMenu_PC && <Menu_PC setIsOpen={setIsOpenMenu_PC} />}
			{/*  */}
			{isOpenMenu_mob && <Menu_mob setIsOpen={setIsOpenMenu_mob} />}
		</div>
	)
}
