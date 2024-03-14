import debounce from 'debounce'
import { ChangeEvent, useState } from 'react'
import {
	StyledSearchTaskSection,
	StyledTaskSearchInput,
	StyledTaskSearchLabel,
} from '.'
import { useTaskStore } from '../../../entities/task/model'

export const TasksSearch = () => {
	const { search, setSearch } = useTaskStore()
	const [isFocused, setIsFocused] = useState(false)
	const [inputValue, setInputValue] = useState(search)

	const debouncedSetSearch = debounce(value => {
		setSearch(value)
	}, 1000)

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		if (value.length === 0) {
			setInputValue(value)
			debouncedSetSearch(value)
			return
		}
		setInputValue(value)
		debouncedSetSearch(value)
	}

	return (
		<StyledSearchTaskSection>
			<img src='/search.svg' alt='search' width={24} height={24} />
			<StyledTaskSearchLabel $isFocused={isFocused || !!search}>
				Search
			</StyledTaskSearchLabel>
			<StyledTaskSearchInput
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				type='text'
				value={inputValue}
				onChange={onChange}
			/>
		</StyledSearchTaskSection>
	)
}
