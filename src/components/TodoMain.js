import React, {useState} from 'react'
import Task from './Task';

// attending session


function TodoMain() {
  // 1 string, 2 - arr
  const [taskInput, setTaskInput] = useState(""); // input "" -> input - "value" , input -> arr, input -> ""
  const [taskArray, setTaskArray] = useState([]); // input -> "todo1" -> arr["todo1", "todo2"]


  const onTaskChange = (event) => {
    // console.log(taskInput);
    setTaskInput(event.target.value)
  }

  const addTaskToArray = () => {
    setTaskArray((prevTasks) => {
      return [...prevTasks, taskInput]
    })
    setTaskInput("")
  }
  return (
    <div>
        <input type="text" value={taskInput} placeholder="Enter a task" onChange={onTaskChange}/>
        <button onClick={addTaskToArray}>Add</button>
        <ol>{ taskArray.map((val, index) => {
          return <Task key={index} text={val} />
        }) }</ol>
    </div>
  )
}

export default TodoMain