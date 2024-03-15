import { format } from 'date-fns'
import {
	StyledMonthName,
	StyledMonthNavigationButton,
	StyledMonthNavigationSection,
} from '.'

export const MonthNavigation = ({ date, subtractMonth, addMonth }: Props) => {
	return (
		<StyledMonthNavigationSection>
			<StyledMonthNavigationButton onClick={subtractMonth}>
				⬅️ Previous
			</StyledMonthNavigationButton>
			<StyledMonthName>{format(date, 'MMMM yyyy')}</StyledMonthName>
			<StyledMonthNavigationButton onClick={addMonth}>
				Next ➡️
			</StyledMonthNavigationButton>
		</StyledMonthNavigationSection>
	)
}
type Props = {
	date: number
	addMonth: () => void
	subtractMonth: () => void
}
