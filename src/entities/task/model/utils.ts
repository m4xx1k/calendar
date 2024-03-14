import { Task } from '.'

function generateRandomWord(length: number) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	let randomWord = ''
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length)
		randomWord += characters[randomIndex]
	}
	return randomWord
}

export function generateTasks(date: number): Task[] {
	const tasks = []
	const taskCount = Math.floor(Math.random() * 5)

	for (let i = 0; i < taskCount; i++) {
		const id = `task${i + 1}`
		const titleLength = Math.floor(Math.random() * 5) + 5
		const title = generateRandomWord(titleLength)

		tasks.push({ id, title, order: i, date })
	}

	return tasks
}
