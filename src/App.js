import logo from "./logo.svg";
import "./App.css";
import CustomModal from "./components/CustomModal";
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TasksList from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState([]);
  const numTasks = tasks.length;

  // Count tasks by priority
  const countPriorityTasks = (tasks, priority) =>
    tasks.filter((task) => task.priority === priority).length;
  const lowTasks = countPriorityTasks(tasks, "low");
  const mediumTasks = countPriorityTasks(tasks, "medium");
  const highTasks = countPriorityTasks(tasks, "high");

  // CRUD operations
  function handleSetTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }
  function handleDeleteTasks(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }
  // console.log(tasks);
  return (
    <div className="App">
      <Header numTasks={numTasks} />
      <div className="main_form_container">
        <div className="header_form_container">
          <h2 className="subtitle">Your tasks:</h2>
          <span className="priority_label">All: {numTasks}</span>
          <span className="priority_label">Low Priority: {lowTasks}</span>
          <span className="priority_label">Medium Priority: {mediumTasks}</span>
          <span className="priority_label">High Priority: {highTasks}</span>
          <CustomModal title={"Add a task"}>
            <Form onSetTasks={handleSetTasks} />
          </CustomModal>
        </div>
        <div className="body_form_container">
          {numTasks === 0 ? (
            "No tasks"
          ) : (
            <TasksList tasks={tasks} onDeleteTasks={handleDeleteTasks} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
