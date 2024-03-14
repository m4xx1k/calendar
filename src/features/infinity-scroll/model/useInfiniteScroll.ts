import { RefObject, useEffect, useRef } from 'react'
import { scrollWindow } from '.'
export const useInfiniteScroll = ({
	cb,
	position,
}: {
	cb: () => void
	position: 'top' | 'bottom'
}): {
	ref: RefObject<HTMLDivElement>
} => {
	const triggerRef = useRef<HTMLDivElement>(null)
	const observerRef = useRef<IntersectionObserver | null>(null)

	useEffect(() => {
		observerRef.current = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				cb()
				const directions = {
					top: 'down' as const,
					bottom: 'up' as const,
				}
				scrollWindow({
					direction: directions[position],
					value: 10,
				})
			}
		})
	}, [])

	useEffect(() => {
		if (observerRef.current && triggerRef.current)
			observerRef.current.observe(triggerRef.current)

		return () => {
			if (observerRef.current) observerRef.current.disconnect()
		}
	}, [triggerRef])
	return { ref: triggerRef }
}
