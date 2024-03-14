import { getDay, getDaysInMonth, startOfMonth } from 'date-fns'
import { Week } from '.'
import { days } from '../../../shared/utils'

export const generateWeeksWithDays = (date: number): Array<Week> => {
	const weeks = []
	const currentDate = new Date(date)

	const daysInMonth = getDaysInMonth(currentDate)
	const firstDayWeek = getDay(startOfMonth(currentDate))
	let week = []

	for (let i = 0; i < firstDayWeek; i++) {
		week.push(null)
	}

	for (let i = 1; i <= daysInMonth; i++) {
		const currentDate = new Date(date)
		const currentDay = new Date(
			Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), i)
		)

		week.push({
			name: days[currentDay.getDay()],
			day: i,
			date: currentDay.getTime(),
		})

		if (week.length === 7) {
			weeks.push(week)
			week = []
		}
	}

	if (week.length > 0) {
		weeks.push(week)
	}

	return weeks
}
