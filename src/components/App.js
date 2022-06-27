import React, {useState} from 'react'
import TodoMain from './TodoMain'
import '../App.css'

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(updateTime, 1000);
  return (
    <div className='App'>
    <h1>Todo App</h1>
    <h2>{currentTime}</h2>
    <TodoMain />
    </div>
  )
}

export default App
