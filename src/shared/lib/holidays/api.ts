import { Country, PublicHoliday } from '.'

const url = (path: string): string => `https://date.nager.at/api/v3${path}`
export const fetchAllCountries = async (): Promise<Country[]> => {
	const response = await fetch(url('/AvailableCountries'), {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
	const data = await response.json()
	return data
}
export const fetchHolidays = async (
	countryCode: string,
	year: number | string
): Promise<PublicHoliday[]> => {
	const response = await fetch(url(`/PublicHolidays/${year}/${countryCode}`), {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
	const data = await response.json()
	return data
}
