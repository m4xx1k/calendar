import { useInfiniteScroll } from '../model'

export const Trigger = ({
	cb,
	position,
}: {
	cb: () => void
	position: 'top' | 'bottom'
}) => {
	const { ref } = useInfiniteScroll({ cb, position })
	return (
		<div
			ref={ref}
			style={{
				width: '100%',
				height: 1,
				background: 'var(--primary)',
			}}
		>
			{' '}
		</div>
	)
}
