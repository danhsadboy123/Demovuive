import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const handleAddTask = () => {
    if (task !== '') {
      setTasks([...tasks, { id: idCounter, task: task }]);
      setIdCounter(idCounter + 1);
      setTask('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="task-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((taskItem) => (
              <tr key={taskItem.id}>
                <td>{taskItem.id}</td>
                <td>{taskItem.task}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoApp;
