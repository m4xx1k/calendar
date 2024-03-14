import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { Task } from '.'
const currentDate = new Date(Date.now())
const initialDate = new Date(
	Date.UTC(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		currentDate.getDate()
	)
).getTime()
export const useTaskStore = create<
	TaskStore,
	[['zustand/persist', never], ['zustand/immer', never]]
>(
	persist(
		immer((set, get) => ({
			overedTask: null,
			task: null,
			search: '',
			tasks: [
				{ id: '1', title: 'Task 1', date: initialDate, order: 1, tags: [] },
			],
			setSearch: (search: string) =>
				set(state => {
					state.search = search
				}),

			select: (task: Task | null) =>
				set(state => {
					state.task = task
				}),
			onOver: (task: Task | null) =>
				set(state => {
					state.overedTask = task
				}),
			deleteTask: (id: string) =>
				set(state => {
					state.tasks = state.tasks.filter(task => task.id !== id)
				}),
			updateTask: (data: UpdateTaskType) =>
				set(state => {
					const index = state.tasks.findIndex(task => task.id === data.id)
					state.tasks[index].title = data.title
					state.tasks[index].tags = data.tags
				}),
			dropTask: (date: number) =>
				set(state => {
					const selectedTask = get().task
					const overedTask = get().overedTask

					if (!selectedTask) return

					if (!overedTask) {
						state.tasks = state.tasks.map(task => {
							if (task.id === selectedTask.id) {
								return {
									...task,
									date: date,
								}
							}
							return task
						})
					} else {
						const selectedTaskIndex = state.tasks.findIndex(
							task => task.id === selectedTask.id
						)
						const overedTaskIndex = state.tasks.findIndex(
							task => task.id === overedTask.id
						)

						const selectedTaskOrder = selectedTask.order
						const overedTaskOrder = overedTask.order

						const tasks = [...state.tasks]
						tasks.splice(selectedTaskIndex, 1)
						tasks.splice(overedTaskIndex, 0, selectedTask)

						if (selectedTaskIndex < overedTaskIndex) {
							tasks.slice(selectedTaskIndex, overedTaskIndex).forEach(task => {
								if (
									task.order > selectedTaskOrder &&
									task.order <= overedTaskOrder
								) {
									task.order--
								}
							})
						} else {
							tasks
								.slice(overedTaskIndex + 1, selectedTaskIndex + 1)
								.forEach(task => {
									if (
										task.order >= overedTaskOrder &&
										task.order < selectedTaskOrder
									) {
										task.order++
									}
								})
						}

						state.tasks = tasks.map(task => {
							if (task.id === selectedTask.id) {
								return {
									...task,
									order: overedTaskOrder,
									date: date,
								}
							}
							return task
						})
					}
				}),
			addTask: (data: AddTaskType) =>
				set(state => {
					const newTask = {
						...data,
						id: data.title + data.date,
						order:
							state.tasks.filter(task => task.date === data.date).length + 1,
					}
					state.tasks = [...state.tasks, newTask]
				}),
		})),
		{ name: 'tasks' }
	)
)
type AddTaskType = {
	date: number
	title: string
	tags: string[]
}
type UpdateTaskType = {
	id: string
	title: string
	tags: string[]
}

type TaskStore = {
	tasks: Task[]
	task: Task | null
	overedTask: Task | null
	search: string
	setSearch: (search: string) => void
	onOver: (task: Task) => void
	deleteTask: (id: string) => void
	updateTask: (data: UpdateTaskType) => void
	select: (task: Task) => void
	dropTask: (date: number) => void
	addTask: (data: AddTaskType) => void
}
