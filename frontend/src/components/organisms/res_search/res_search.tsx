import { motion } from 'framer-motion'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Search_users } from '../../../shared/res/search_Users'
import { search_header_data } from '../../../shared/store/search_data'
import { search_result } from '../../../shared/store/search_result'
import { Chat } from '../../maecules/chat/chat'

function Res_search() {
	useEffect(() => {
		Search_users()
	}, [search_header_data.query])

	const result = toJS(search_result.result)

	console.log('search_res: ', toJS(search_result.result))
	return (
		<motion.div
			initial={{ opacity: 0, x: -30 }}
			animate={{ opacity: 1, x: 0 }}
			className='w-[90%] mx-auto h-[130px]
			flex justify-center mt-7 border rounded-2xl
			p-3 border-[#444]'
		>
			{search_result.success && result?.data ? (
				<div className='w-[100%]'>
					{result.data.map((data, idx) => (
						<div key={idx}>
							<Chat
								ava={data.ava}
								username={data.username}
								name={data.display_Name}
							/>
						</div>
					))}
				</div>
			) : (
				<div>ничего не найдено</div>
			)}
		</motion.div>
	)
}

export default observer(Res_search)
