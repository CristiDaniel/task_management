import { useState } from "react";
import Task from "./Task";

// Set order for sorting
const statusOrder = ["Completed", "Overdue", "Upcoming", "Cancelled"];

function TasksList({ tasks, onDeleteTasks, onUpdateTasks }) {
  const [sortBy, setSortBy] = useState("input");
  const [filterBy, setFilterBy] = useState("input");

  let sortedTasks;
  if (sortBy === "input") sortedTasks = tasks;

  if (sortBy === "title")
    sortedTasks = tasks.slice().sort((a, b) => a.title.localeCompare(b.title));

  if (sortBy === "note")
    sortedTasks = tasks.slice().sort((a, b) => a.note.localeCompare(b.note));

  if (sortBy === "status") {
    sortedTasks = tasks.slice().sort((a, b) => {
      const statusA = statusOrder.indexOf(a.status);
      const statusB = statusOrder.indexOf(b.status);

      return statusA - statusB;
    });
  }
  return (
    <>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="title">Sort by title</option>
        <option value="note">Sort by notes</option>
        <option value="status">Sort by status</option>
      </select>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="title">Sort by title</option>
        <option value="note">Sort by notes</option>
        <option value="status">Sort by status</option>
      </select>
      <ul className="tasks_container">
        {sortedTasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDeleteTasks={onDeleteTasks}
            onUpdateTasks={onUpdateTasks}
          />
        ))}
      </ul>
    </>
  );
}

export default TasksList;
