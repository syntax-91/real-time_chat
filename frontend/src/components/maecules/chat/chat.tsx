import { current_chat_Store } from '../../../shared/store/current_Chat_store'
import type { TChat_props } from '../../../shared/types/types'

export function Chat(data: TChat_props) {
	const handleClick = () => {
		current_chat_Store.current_chat_open({
			ava: data.ava,
			name: data.name,
			status: data.status,
			username: data.username,
		})
	}

	return (
		<div
			onClick={handleClick}
			className='
		w-[100%] mt-5 mx-auto h-[45px] bg-white/3
		hover:bg-white/5 rounded-2xl
		flex items-center'
		>
			<div
				className='w-[45px] h-[45px]
			rounded-[50%] bg-white/40
			flex justify-center items-center'
			>
				<img src={data.ava} alt='IMG' />
			</div>

			<div className='ml-5'>
				<h2>{data.username}</h2>
			</div>
		</div>
	)
}
