import { Fragment } from 'react'
import {
	StyledCalendar,
	StyledContainer,
	StyledTopSection,
	StyledWeekRow,
} from '.'
import { CalendarDayItem } from '../../../entities/day/ui/'
import { MonthNavigation } from '../../../features/calendar/ui'
import { useHoliday } from '../../../features/holiday/model/use-holiday'
import { SelectCountry } from '../../../features/holiday/ui'
import { InfiniteScrollTrigger } from '../../../features/infinity-scroll/ui'
import { TasksSearch } from '../../../features/task/ui'
import { useCalendar } from '../model'

export const Calendar = () => {
	const { date, month, addMonth, subtractMonth } = useCalendar()
	const { holidays, selectCountryProps } = useHoliday(date)
	return (
		<StyledContainer>
			<InfiniteScrollTrigger cb={subtractMonth} position='top' />
			<StyledTopSection>
				<TasksSearch />
				<SelectCountry {...selectCountryProps} />
			</StyledTopSection>

			<StyledCalendar>
				{month && (
					<Fragment>
						<MonthNavigation
							date={date}
							addMonth={addMonth}
							subtractMonth={subtractMonth}
						/>
						{month.weeks.map((week, i) => (
							<StyledWeekRow key={i}>
								{week.map((day, i) => (
									<CalendarDayItem
										holidays={holidays || []}
										day={day}
										key={i}
									/>
								))}
							</StyledWeekRow>
						))}
					</Fragment>
				)}
			</StyledCalendar>
			<InfiniteScrollTrigger cb={addMonth} position='bottom' />
		</StyledContainer>
	)
}
