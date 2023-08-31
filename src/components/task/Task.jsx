import React, { useState } from 'react'
import "./Task.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Task(props) {

	const [status, setStatus] = useState(props.status);
	const [taskInput, setTaskInput] = useState(true);
	const [inputString, setInputString] = useState(props.task);

	const changeInput = (event) => {
		setInputString(event.target.value);
		props.changeTask(event.target.value);
	}

	const changeStatus = () => {
		setStatus(!status);
	}

	const changeStatusInput = () => {
		setTaskInput(!taskInput);
	}

	const fieldTask = () => {
		return (taskInput) ?
			<div className="task-content" onClick={changeStatus} style={{
				textDecoration: (status) ? "none" : "line-through",
				color: (status) ? "black" : "red"
			}}>
				{props.task}
			</div>
			:
			<input className="input-field task-content" type="text" value={inputString} onChange={changeInput}>
			</input>
	}

	return (
		<div className='task'>
			<div className="task-id">
				{props.id}
			</div>
			{fieldTask()}



			<EditIcon onClick={changeStatusInput} />
			<DeleteIcon onClick={props.remove} />

		</div>
	)
}
