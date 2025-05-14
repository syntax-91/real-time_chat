import type { InputProps } from '../../shared/types/types'
import s from './../../shared/styles/UI_styles/Input_styles.module.css'

export function Input({
	placeholder = 'Enter text',
	type = 'text',
	style = 'input_style_default',
	size = 'size_default',
	...rest
}: InputProps) {
	//

	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`${s[style]} ${s[size]}`}
			value={rest.value}
			onChange={rest.onChange}
		/>
	)
}
