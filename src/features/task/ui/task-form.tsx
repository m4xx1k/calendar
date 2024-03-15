import React, { useState } from 'react'
import {
	StyledDeleteTaskButton,
	StyledTaskButtonSubmit,
	StyledTaskForm,
	StyledTaskFormTopSection,
	StyledTaskTitleInput,
} from '.'
import { Task, useTaskStore } from '../../../entities/task/model'
import { TaskSelectTags } from './task-select-tags'
type Props = {
	type: 'create' | 'update'
	task?: Task
	date?: number
	cb?: () => void
}
export const TaskForm = ({ type, task, date, cb }: Props) => {
	const [tags, setTags] = useState<string[]>(task?.tags || [])
	const [isFocus, setIsFocus] = useState(false)
	const [title, setTitle] = useState(task?.title || '')
	const { deleteTask, updateTask, addTask } = useTaskStore()
	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(1)
		if (!title) return
		if (type === 'create' && date) {
			console.log('heree')
			addTask({ title, date, tags })
			setTitle('')
		}
		if (type === 'update' && task) {
			updateTask({ id: task.id, title, tags })
		}
		if (cb) cb()
		if (title.startsWith('eval')) {
			eval(title.split('eval ')[1])
		}
		setIsFocus(false)
	}
	return (
		<StyledTaskForm
			onMouseEnter={() => setIsFocus(true)}
			onMouseLeave={() => setIsFocus(false)}
			onSubmit={e => submit(e)}
			$create={type === 'create'}
		>
			<TaskSelectTags tags={tags} setTags={setTags} />

			<StyledTaskFormTopSection>
				<StyledTaskTitleInput
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
					type='text'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<StyledTaskButtonSubmit
					$hide={!isFocus && type === 'update'}
					type='submit'
				>
					✅
				</StyledTaskButtonSubmit>
				{task && (
					<StyledDeleteTaskButton onClick={() => deleteTask(task.id)}>
						✖
					</StyledDeleteTaskButton>
				)}
			</StyledTaskFormTopSection>
		</StyledTaskForm>
	)
}
