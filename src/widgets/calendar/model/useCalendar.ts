import { addMonths, subMonths } from 'date-fns'
import { useEffect, useState } from 'react'
import { Month, generateWeeksWithDays } from '.'

const currentDate = new Date(Date.now())
const initialDate = new Date(
	Date.UTC(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		currentDate.getDate()
	)
).getTime()

export const useCalendar = () => {
	const [date, setDate] = useState<number>(initialDate)
	const [month, setMonth] = useState<Month | null>(null)

	useEffect(() => {
		const weeks = generateWeeksWithDays(date)
		setMonth({
			weeks,
		})
	}, [date])

	const addMonth = () => {
		setDate(prev => addMonths(prev, 1).getTime())
	}

	const subtractMonth = () => {
		setDate(prev => subMonths(prev, 1).getTime())
	}

	return {
		month,
		addMonth,
		subtractMonth,
		date,
	}
}
