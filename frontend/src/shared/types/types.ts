import type React from 'react'

export type UserData = {
	username: string
	password: string
}

export type InputProps = {
	placeholder: string
	type?: 'text' | 'password'
	style?: 'input_style_default'
	size?: 'w-full' | 'size_default'
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	value: string
}

export type TCurrent_Chat_props = {
	ava: string
	name: string
	status: 'online' | 'offline' | 'typing...'
	username: string
}

export type TChat_props = {
	ava: string
	username: string
	name: string
	status: 'online' | 'offline' | 'typing...'
	chatExists: boolean
}

export type TPropsBtn = {
	label: string
	onClick?: () => void
	style?: 'default' | 'remove'
	location?: 'left' | 'center' | 'right'
	type?: 'button' | 'submit' | 'reset'
}

export type Tmsg = {
	messageID: string
	rootID: string
	senderID: string
	//

	senderName: string
	senderAva: string
	//
	text: string
	time: string
	messageType: 'text' | 'img' | 'file'
	status: 'sent' | 'delivered' | 'read'
}

export type TMsgs = msg[]
