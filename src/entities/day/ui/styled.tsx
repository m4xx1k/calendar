import styled from 'styled-components'

export const StyledDay = styled.div<{ $dayOfMonth: boolean | undefined }>`
	position: relative;
	margin-left: 2px;
	width: 12vw;
	height: 150px;
	padding: 10px;
	border-radius: 2px;
	transition: 0.3s;
	font-size: 12px;
	background-color: ${props =>
		props.$dayOfMonth ? 'var(--primary)' : 'var(--neutral)'};
`
export const StyledDayNumber = styled.span`
	font-size: 12px;
	position: absolute;
	top: 4px;
	left: 6px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 90%;
`
