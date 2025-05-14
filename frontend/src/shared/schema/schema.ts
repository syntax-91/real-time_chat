export const UserNameSchema = {
	required: 'Поля является обязательной..',
}

export const PswSchema = {
	required: 'Поля является обязательной..',
	minLength: { value: 6, message: 'минимум 6' },
}
