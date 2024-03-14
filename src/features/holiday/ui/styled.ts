import styled from 'styled-components'

export const StyledSelectCountrySection = styled.section`
	display: flex;
	align-items: center;
	border: 1px solid var(--neutral);
	border-radius: 4px;
	width: 200px;
	height: 40px;
	padding-left: 1rem;
	position: relative;
`
export const StyledSelectedCountry = styled.p`
	cursor: pointer;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding-right: 12px;
`
export const StyledSelectCountryList = styled.ul`
	position: absolute;
	background-color: var(--dark);
	border-radius: 4px;
	padding: 8px;
	max-height: 300px;
	overflow-y: auto;
	top: 110%;
	left: 0;
	right: 0;
	z-index: 2;
	width: 100%;
`
export const StyledSelectCountryItem = styled.li`
	cursor: pointer;
	padding: 0.5rem;
	border-radius: 4px;
	transition: background-color 0.3s;
	&:hover {
		background-color: var(--primary);
		color: var(--dark);
	}
`
export const StyledSelectCountryArrow = styled.img<{ $open?: boolean }>`
	transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
	transition: transform 0.3s;
`

export const StyledSelectedCountryLabel = styled.label`
	position: absolute;
	background-color: var(--dark);
	font-size: 11px;
	left: 6px;
	top: -6px;
`
