import { endOfDay } from 'date-fns'
import React, { useMemo } from 'react'
import { StyledAddTaskButton, StyledTaskList, TaskItem } from '.'
import { TaskForm } from '../../../features/task/ui'
import { useTaskStore } from '../model'
export const TaskList = ({ date }: { date: number }) => {
	const [isHover, setIsHover] = React.useState(false)
	const [isTaskCreateFormOpen, setIsTaskCreateFormOpen] = React.useState(false)
	const { tasks, dropTask, search } = useTaskStore()
	const { start, end } = useMemo(
		() => ({
			start: date,
			end: endOfDay(date).getTime(),
		}),
		[date]
	)

	const onDragOver = (event: React.DragEvent<HTMLUListElement>) => {
		event.preventDefault()
	}
	const onDrop = () => {
		dropTask(date)
	}

	const hideAll = () => {
		setIsTaskCreateFormOpen(false)
		setIsHover(false)
	}

	return (
		<StyledTaskList
			onDrop={onDrop}
			onDragOver={onDragOver}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={hideAll}
			onDragLeave={hideAll}
			onDragEnd={hideAll}
		>
			{tasks &&
				tasks
					.filter(
						task =>
							task.date >= start &&
							task.date <= end &&
							(search ? task.title.includes(search) : true)
					)
					.sort((a, b) => a.order - b.order)
					.map(task => (
						<TaskItem onDragCallback={hideAll} key={task.id} task={task} />
					))}
			{isHover && (
				<StyledAddTaskButton onClick={() => setIsTaskCreateFormOpen(true)}>
					+ Add Task
				</StyledAddTaskButton>
			)}
			{isTaskCreateFormOpen && (
				<TaskForm type='create' date={date} cb={hideAll} />
			)}
		</StyledTaskList>
	)
}
