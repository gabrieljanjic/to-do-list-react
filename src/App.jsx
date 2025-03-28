import { useState } from "react";
import "./App.css";
import EachTask from "./EachTask";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const addingTask = () => {
    task && setTaskList([...taskList, task]);
    setTask("");
  };
  const removeTask = (indexDelete) => {
    setTaskList(taskList.filter((_, index) => index !== indexDelete));
  };
  return (
    <section className="todo-container">
      <h1>Todo list</h1>
      <div className="input-container">
        <input type="text" className="input" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="button" className="input btn-add" onClick={addingTask}>
          search
        </button>
      </div>
      <div className="tasks-contianer">
        <EachTask taskList={taskList} removeTask={removeTask} />
      </div>
    </section>
  );
}

export default App;
