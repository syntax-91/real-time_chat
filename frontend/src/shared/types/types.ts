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
