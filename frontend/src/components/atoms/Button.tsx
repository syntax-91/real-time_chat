import { LR_anim } from './animations/lr'
import s from './styles/buttonStyles.module.css'
import { BtnProps } from './types/types'

export function Button({
	label = 'text',
	type = 'button',
	style = 'default',
	location = 'start',
	theme = 'dark',
	isBlock = true,
	max_w = 80,
	w = 300,
	...rest
}: BtnProps) {
	//
	const refBtn = LR_anim()

	return (
		<div
			className={`${isBlock ? `flex w-[100%]` : 'inline-flex'}

			/*----------*/

			${location === 'start' && 'justify-start'}
			${location === 'center' && 'justify-center'}
			${location === 'end' && 'justify-end'}
	  	`}
		>
			<button
				ref={refBtn}
				style={{ width: w, maxWidth: `${max_w}%` }} //
				className={` ${s[style]} ${s[theme]} `}
				onClick={rest.onClick}
			>
				{label}
			</button>
		</div>
	)
}
