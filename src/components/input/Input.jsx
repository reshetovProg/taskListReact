import React, { useState } from 'react'
import Task from '../task/Task'
import "./Input.css"

export default function Input() {

	const [inputString, setInputString] = useState("");
	const [count, setCounter] = useState(0);


	const [task, setTask] = useState([]);

	const addTask = () => {
		setTask(task.slice().concat(
			{
				id: count,
				task: inputString,
				status: true
			}));
		setCounter(count => count + 1);
		console.log(count);
		console.log(task);
		setInputString("");
	}

	const removeTask = (id) => {
		setTask(task.slice(0, id).concat(task.slice(id + 1)));
		setInputString("");
		console.log(task);
	}

	const changeInput = (event) => {
		setInputString(event.target.value);
	}

	const changeTask = (id, content) => {
		let buf = task.slice();
		buf[id].task = content
		setTask(buf);
	}

	return (
		<div>
			<div className="input-field">
				<input type="text" name="" id="" className="input" onChange={changeInput} value={inputString} />
				<button type="submit" className="add-btn" onClick={addTask}>ADD</button>

			</div>
			{
				task.map((el) => {
					return <Task
						key={el.id}
						id={task.indexOf(el)}
						task={el.task}
						status={el.status}
						remove={() => removeTask(task.indexOf(el))}
						changeTask={(content) => changeTask(task.indexOf(el), content)}
					/>
				})
			}

		</div>
	)
}
