import styled from 'styled-components'

export const StyledTaskForm = styled.form<{ $create?: boolean }>`
	border-radius: 4px;
	background: ${props => (props.$create ? 'var(--light)' : 'transparent')};
	padding: ${props => (props.$create ? '4px' : '0')};
`

export const StyledTaskFormTopSection = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`
export const StyledTaskTitleInput = styled.input<{
	$isFocus?: boolean
}>`
	width: 100%;
	height: 100%;
	outline: none;
	font-size: 12px;
	padding-bottom: 2px;
	border-radius: 2px;
	border: none;
`
export const StyledTaskButtonSubmit = styled.button<{ $hide?: boolean }>`
	background: transparent;
	border: none;
	cursor: pointer;
	font-size: 12px;
	font-weight: bold;
	outline: none;
	opacity: ${props => (props.$hide ? 0 : 1)};
`

export const StyledDeleteTaskButton = styled.button`
	background: transparent;
	border: none;
	color: var(--dark);
	cursor: pointer;
	font-size: 12px;
	font-weight: bold;
	outline: none;
`
export const StyledSelectTagList = styled.ul`
	position: absolute;
	top: 110%;
	left: -4px;
	display: flex;
	align-items: flex-start;
	background: var(--light);
	gap: 2px;
	padding: 4px;
	border-radius: 4px;
	margin-left: 4px;
`

export const StyledSelectedTagList = styled.ul`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 2px;
	width: 100%;
	margin-left: 4px;
`

export const StyledSelectTagSection = styled.section`
	position: relative;
`

export const StyledAddTagButton = styled.button`
	background: var(--dark);
	border-radius: 9999px;
	width: 10px;
	height: 10px;
	cursor: pointer;
	color: var(--light);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 8px;
	border: none;
	outline: none;
`
export const StyledSelectTagItem = styled.li<{ $color: string }>`
	background: ${props => props.$color};
	border-radius: 9999px;
	width: 20px;
	height: 10px;
	cursor: pointer;
`
export const StyledSearchTaskSection = styled.section`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 400px;
	height: 40px;

	border: 1px solid var(--neutral);
	border-radius: 4px;
	padding-left: 8px;
`
export const StyledTaskSearchInput = styled.input`
	width: 100%;
	height: 100%;
	outline: none;
	border: none;
	background: transparent;
	padding-left: 4px;
	font-size: 14px;
	color: var(--light);
	z-index: 1;
`

export const StyledTaskSearchLabel = styled.label<{ $isFocused: boolean }>`
	font-size: ${props => (props.$isFocused ? '12px' : '14px')};
	color: ${props => (props.$isFocused ? 'var(--light)' : 'var(--neutral)')};
	position: absolute;
	top: ${props => (props.$isFocused ? '0' : '50%')};
	background: var(--dark);
	left: 40px;
	transform: translateY(-50%);
	transition: all 0.2s;
	z-index: 0;
`
