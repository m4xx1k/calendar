import { endOfDay, startOfDay } from 'date-fns'
import { Fragment, useMemo } from 'react'
import { StyledDay, StyledDayNumber } from '.'
import { PublicHoliday } from '../../../shared/lib/holidays'
import { TaskList } from '../../task/ui/'
import { Day } from '../model'

export const CalendarDayItem = ({
	day,
	holidays,
}: {
	day: Day | null
	holidays: PublicHoliday[]
}) => {
	const daysHoliday = useMemo(
		() =>
			holidays.find(holiday => {
				const [year, month, dayNum] = holiday.date.split('-').map(Number) as [
					number,
					number,
					number
				]
				const holidayDate = new Date(Date.UTC(year, month - 1, dayNum))
				const startHoliday = startOfDay(holidayDate).getTime()
				const endHoliday = endOfDay(holidayDate).getTime()
				return day && day.date >= startHoliday && day.date <= endHoliday
			}),
		[holidays, day]
	)
	return (
		<StyledDay $dayOfMonth={day !== null}>
			{day && (
				<Fragment>
					<StyledDayNumber>
						{day.day}
						{'   '}
						{daysHoliday && daysHoliday.localName}
					</StyledDayNumber>
					<TaskList date={day.date} />
				</Fragment>
			)}
		</StyledDay>
	)
}
