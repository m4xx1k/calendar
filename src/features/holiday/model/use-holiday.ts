import { format } from 'date-fns'
import { useMemo, useState } from 'react'
import useSWR from 'swr'
import {
	Country,
	fetchAllCountries,
	fetchHolidays,
} from '../../../shared/lib/holidays'

const getInitialCountry = (): Country | null => {
	const country = localStorage.getItem('country')
	return country ? (JSON.parse(country) as Country) : null
}
export const useHoliday = (date: number) => {
	const year = useMemo(() => format(date, 'yyyy'), [date])
	const [country, setCountry] = useState<Country | null>(getInitialCountry())
	const selectCountry = (country: Country) => {
		setCountry(country)
		localStorage.setItem('country', JSON.stringify(country))
	}
	const { data: countries } = useSWR('countries', fetchAllCountries, {
		onSuccess: data =>
			data.length > 0 &&
			!country &&
			setCountry(data.find(c => c.countryCode === 'UA') || data[0]),
	})
	const { data: holidays } = useSWR(
		country && `public-holidays/${country.countryCode}/${year}`,
		() => fetchHolidays(country ? country.countryCode : '', year)
	)
	return {
		holidays,
		selectCountryProps: {
			countries,
			country,
			selectCountry,
		},
	}
}
