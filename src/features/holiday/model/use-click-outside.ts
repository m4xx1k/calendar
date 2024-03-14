import { RefObject, useEffect, useRef } from 'react'

export function useOutside(cb: () => void): RefObject<HTMLElement> {
	const ref = useRef<HTMLElement>(null)
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				event.target &&
				ref.current &&
				!ref.current.contains(event.target as Node)
			) {
				cb()
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [cb, ref])
	return ref
}
