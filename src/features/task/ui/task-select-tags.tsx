import React from 'react'
import {
	StyledAddTagButton,
	StyledSelectTagItem,
	StyledSelectTagList,
	StyledSelectTagSection,
	StyledSelectedTagList,
} from '.'

export const TaskSelectTags = ({ tags, setTags }: Props) => {
	const [openAddTag, setOpenAddTag] = React.useState(false)

	const notSelectedTags = React.useMemo(
		() => allTags.filter(tag => !tags.includes(tag)),
		[tags]
	)
	React.useEffect(() => {
		if (notSelectedTags.length === 0) {
			setOpenAddTag(false)
		}
	}, [notSelectedTags])
	const selectTag = (color: string) => {
		setTags(prev => [...prev, color])
	}
	const unselectTag = (color: string) =>
		setTags(prev => prev.filter(c => c !== color))
	const toggleOpenAddTag = () => {
		setOpenAddTag(prev => !prev)
	}
	return (
		<StyledSelectTagSection>
			<StyledSelectedTagList>
				{tags.length > 0 &&
					tags.map(color => (
						<StyledSelectTagItem
							onClick={() => unselectTag(color)}
							key={color}
							$color={color}
						/>
					))}
				{notSelectedTags.length > 0 && (
					<StyledAddTagButton type='button' onClick={toggleOpenAddTag}>
						{openAddTag ? (
							'✖'
						) : (
							<img src='/plus.svg' alt='add tag' width={6} height={6} />
						)}
					</StyledAddTagButton>
				)}
			</StyledSelectedTagList>
			{openAddTag && (
				<StyledSelectTagList>
					{notSelectedTags.map(color => (
						<StyledSelectTagItem
							key={color}
							$color={color}
							onClick={() => selectTag(color)}
						/>
					))}
				</StyledSelectTagList>
			)}
		</StyledSelectTagSection>
	)
}
type Props = {
	tags: string[]
	setTags: React.Dispatch<React.SetStateAction<string[]>>
}
const allTags: string[] = [
	'#ffbe0b',
	'#fb5607',
	'#ff006e',
	'#8338ec',
	'#70e000',
]
