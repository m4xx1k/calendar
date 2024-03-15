import styled from 'styled-components'

export const StyledMonthNavigationSection = styled.section`
	display: flex;
	align-items: center;
	gap: 20px;
	margin-top: 40px;
	margin-bottom: 8px;
`

export const StyledMonthName = styled.h2`
	font-size: 2rem;
`

export const StyledMonthNavigationButton = styled.button`
	background-color: var(--primary);
	color: var(--light);
	border: none;
	border-radius: 4px;
	height: 40px;
	padding: 0 20px;
	font-size: 1.2rem;
	letter-spacing: 1px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: transform 0.3s ease;
	&:hover {
		transform: scale(1.05);
	}
`
