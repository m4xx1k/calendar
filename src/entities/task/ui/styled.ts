import styled from 'styled-components'

export const StyledTaskList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 4px;
	width: 100%;
	height: 100%;
	margin-top: 4px;
	padding: 4px;
	overflow-y: auto;
	overflow-x: hidden;
`

export const StyledTaskItem = styled.li`
	font-size: 12px;
	padding: 6px 4px;
	background: var(--light);
	width: 100%;
	min-height: 36px;
	border-radius: 8px;
	color: var(--dark);
	align-text: center;
	cursor: grab;
	transition: 0.3s all easy;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const StyledAddTaskButton = styled.button`
	background: var(--light);
	border: none;
	border-radius: 9999px;
	width: fit-content;
	padding: 1px 4px;
	font-size: 12px;
	font-weight: 300;
	letter-spacing: 1px;
	cursor: pointer;
`
