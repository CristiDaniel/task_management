import Task from "./Task";

function TasksList({ tasks, onDeleteTasks, onUpdateTasks }) {
  return (
    <ul className="tasks_container">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onDeleteTasks={onDeleteTasks}
          onUpdateTasks={onUpdateTasks}
        />
      ))}
    </ul>
  );
}

export default TasksList;
