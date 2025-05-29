import { HeaderCurrentChat } from '../../molecules/heaaderCurrentChat'

export function CurrentChatMobile() {

	const mainC_styles = 'bg-black/98 w-[100vw] h-[100vh] fixed top-0 left-0 || fn'
	

	return (
		<div className={mainC_styles}>
	
				<HeaderCurrentChat />

		</div>
	)
}