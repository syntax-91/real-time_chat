import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number) {
	const [_value, setValue] = useState<T>()

	useEffect(() => {
		const t = setTimeout(() => setValue(value), delay)

		return () => clearTimeout(t)
	}, [value])

	return _value
}
