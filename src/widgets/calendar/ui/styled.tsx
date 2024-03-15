import styled from 'styled-components'

export const StyledContainer = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	background-color: var(--dark);
	color: var(--light);
`

export const StyledCalendar = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 20px auto;
`

export const StyledWeekRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2px;
	margin: 2px 0;
`
export const StyledTopSection = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	margin: 0 auto;
	margin-top: 20px;
`
