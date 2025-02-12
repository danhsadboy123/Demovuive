import React from "react";
import { useState } from "react";
function TodoApp() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [id, setId] = useState(0);
  const addTask = () => {
    if (task !== "") {
      setId(id + 1);
      const newtasklist = [...taskList, { id: id, task: task }];
      setTaskList(newtasklist);
      console.log(newtasklist)
      setTask("");
    }
  }
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input value={task} type="text" placeholder="Add Todo" onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="task-list">
        <table >
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>

            {taskList.map((tsask) => (

              <tr key={tsask.id}>
                <td>{tsask.id}</td>
                <td>{tsask.task}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TodoApp;