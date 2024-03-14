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
	const [calendar, setCalendar] = useState<Month[]>([])

	useEffect(() => {
		const weeks = generateWeeksWithDays(date)
		setCalendar([
			{
				weeks,
			},
		])
	}, [date])

	const addMonth = () => {
		setDate(prev => addMonths(prev, 1).getTime())
	}

	const subtractMonth = () => {
		setDate(prev => subMonths(prev, 1).getTime())
	}

	return {
		calendar,
		addMonth,
		subtractMonth,
		date,
	}
}
