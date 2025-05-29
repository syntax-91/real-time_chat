export type TUser = {
	username: string
	password: string
}

export type TModalProps = {
	title: string
	msg: string
}

export interface IModalProps {
	msg?: string
	success?: boolean
}

type BtnType = 'button' | 'submit' | 'reset'

export interface BtnProps {
	label?: string
	type?: BtnType
	onClick?: () => void
	w?: number

	style?: 'укажите свои кастомные типы, и опишите в css' | 'default'

	location?: 'start' | 'center' | 'end'
	theme?: 'dark' | 'light'
	isBlock?: boolean
	max_w?: number
}

/* Input */ 
type InpType = 'text' | 'password' | 'email' | ''

export interface InputProps {
	required?: boolean
	type?: InpType
	placeholder?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	style?: 'укажите свои кастомные типы, и опишите в css' | 'default'|'full'
	theme?: 'dark' | 'light'
}

/* chat */
export interface IChatProps {
	ava: string,
	displayName: string,
	state?: TStateUser,
	profileType?: TProfile,
	latestMsg?: string,
}

// state

export type TStateUser = 'offline'|'online'

// profileType
export type TProfile = 'private'|'public'

