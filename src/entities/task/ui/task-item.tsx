import { StyledTaskItem } from '.'
import { TaskForm } from '../../../features/task/ui'
import { Task, useTaskStore } from '../model'

export const TaskItem = ({
	task,
	onDragCallback,
}: {
	task: Task
	onDragCallback: () => void
}) => {
	const { select, onOver } = useTaskStore()
	const onDragStart = () => {
		onDragCallback()
		select(task)
	}
	const onDragLeave = () => {
		// @ts-expect-error zustand error
		onOver(null)
	}
	const onDragEnd = () => {
		// @ts-expect-error zustand error
		onOver(null)
	}
	const onDragOver = (e: React.DragEvent<HTMLLIElement>) => {
		e.preventDefault()
		onOver(task)
	}
	return (
		<StyledTaskItem
			draggable
			onDragStart={onDragStart}
			onDragLeave={onDragLeave}
			onDragEnd={onDragEnd}
			onDragOver={onDragOver}
		>
			<TaskForm type='update' task={task} />
		</StyledTaskItem>
	)
}
