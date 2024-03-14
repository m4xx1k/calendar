export const scrollWindow = ({
	direction,
	value,
}: {
	value: number
	direction: 'up' | 'down'
}): void => {
	if (typeof window !== 'undefined') {
		const currentPosition = window.scrollY || document.documentElement.scrollTop
		let newPosition
		if (direction === 'down') {
			newPosition = currentPosition + value
		} else if (direction === 'up') {
			newPosition = currentPosition - value
		}
		window.scrollTo({
			top: newPosition,
			behavior: 'instant',
		})
	}
}
