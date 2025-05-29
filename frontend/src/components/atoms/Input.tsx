import s from './../../shared/styles/inputStyles.module.css'
import { InputProps } from './../../shared/types/types'

export function Input({
	type = 'text',
	placeholder = 'Enter text...',
	value = '',
	style = 'default',
	required = false,
	...rest
}: InputProps) {
	return (
		<input
			required={required}
			className={`${s[style]} ${s.default}`}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={rest.onChange}
		/>
	)
}
