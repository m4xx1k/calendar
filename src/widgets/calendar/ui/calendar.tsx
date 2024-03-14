import { format } from 'date-fns'
import { Fragment } from 'react'
import {
	StyledCalendar,
	StyledContainer,
	StyledMonthName,
	StyledTopSection,
	StyledWeekRow,
} from '.'
import { CalendarDayItem } from '../../../entities/day/ui/'
import { useHoliday } from '../../../features/holiday/model/use-holiday'
import { SelectCountry } from '../../../features/holiday/ui'
import { InfiniteScrollTrigger } from '../../../features/infinity-scroll/ui'
import { TasksSearch } from '../../../features/task/ui'
import { useCalendar } from '../model'

export const Calendar = () => {
	const { date, calendar, addMonth, subtractMonth } = useCalendar()
	const { holidays, selectCountryProps } = useHoliday(date)
	return (
		<StyledContainer>
			<InfiniteScrollTrigger cb={subtractMonth} position='top' />
			<StyledTopSection>
				<TasksSearch />
				<SelectCountry {...selectCountryProps} />
			</StyledTopSection>

			<StyledCalendar>
				{calendar.map((monthData, i) => (
					<Fragment key={i}>
						<StyledMonthName>{format(date, 'MMMM yyyy')}</StyledMonthName>
						{monthData.weeks.map((week, i) => (
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
				))}
			</StyledCalendar>
			<InfiniteScrollTrigger cb={addMonth} position='bottom' />
		</StyledContainer>
	)
}
