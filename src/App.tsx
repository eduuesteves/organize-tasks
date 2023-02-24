import { useEffect, useState } from "react";
import "./App.scss";

export function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(["Your To-do List"]);

  function addTask() {
    if(newTask) {
      tasks.push(newTask)
      setNewTask("")
    }
  }
  
  return (
      <>
        <header>
          <h1>Organize Tasks</h1>
        </header>
        <div className="new-task">
          <input 
            type="text" 
            placeholder="Write your task here"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={() => addTask()}>Add</button>
        </div>
        <div className="list-tasks">
        {
          tasks ?
          <>
          {
              tasks.map((e, value) => (
                <li key={value} className={`task${value}`}>
                <strong>{e}</strong>
              </li>
            ))
          }
          </>
          : null
        }
        </div>
      </>
  )
}
