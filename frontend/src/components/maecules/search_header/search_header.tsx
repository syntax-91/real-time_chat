import { useEffect, useState } from 'react'
import { useDebounce } from '../../../shared/lib/useDebounce'
import { search_header_data } from '../../../shared/store/search_data'
import { Input } from '../../atoms/Input'

export function Search_header() {
	const [query, setQuery] = useState('')

	const debouncedQuery = useDebounce(query, 300)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	useEffect(() => {
		search_header_data.setData(query)
	}, [debouncedQuery])

	return (
		<Input
			placeholder='Enter search..'
			onChange={handleChange}
			value={query}
			size='w-full'
		/>
	)
}
