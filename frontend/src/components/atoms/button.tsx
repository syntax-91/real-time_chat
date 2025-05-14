import type { TPropsBtn } from '../../shared/types/types'
import s from './../../shared/styles/UI_styles/Button.module.css'

export function Button({
	label = 'text',
	style = 'default',
	location = 'left',
	type = 'button',
	...rest
}: TPropsBtn) {
	return (
		<div
			className={`${
				location == 'center'
					? 'mx-auto flex justify-center items-center'
					: 'base'
			}`}
		>
			<button type={type} className={`${s[style]}`} onClick={rest.onClick}>
				{label}
			</button>
		</div>
	)
}
