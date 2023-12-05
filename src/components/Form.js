import { useState } from "react";

const priorityLevels = {
  low: { value: "Low", color: "green" },
  medium: { value: "Medium", color: "yellow" },
  high: { value: "High", color: "red" },
};

function Form({ onSetTasks, onSubmit }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  //   const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [hasNote, setHasNote] = useState(false);

  function handleAddNote(btn) {
    btn.preventDefault();
    setHasNote(!hasNote);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!title) return;
    const newTask = {
      id: Date.now(),
      title,
      note,
      //   dueDate,
      hasNote,
      priority,
      status: "Upcoming",
      createdAt: new Date(),
    };
    onSetTasks(newTask);

    // Reset state
    setTitle("");
    setNote("");
    setPriority("low");
    setHasNote(false);
    onSubmit();
    // setDueDate("");
  }

  return (
    <form className="add_task_form" onSubmit={handleSubmit}>
      <div className="container_inputs">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          {Object.keys(priorityLevels).map((priorityKey) => (
            <option
              onChange={(e) => setPriority(e.target.value)}
              key={priorityKey}
              value={priorityKey}
            >
              {priorityLevels[priorityKey].value}
            </option>
          ))}
        </select>
        <input
          className="add_task_input"
          placeholder="Titlu activitate"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        /> */}

        {hasNote && (
          <textarea
            value={note}
            placeholder="Add a note"
            onChange={(e) => setNote(e.target.value)}
          />
        )}
      </div>
      <div className="btns_container">
        {" "}
        <button onClick={handleAddNote}>
          {hasNote ? "Close" : "Add note"}
        </button>
        <button type="submit">Add task</button>
      </div>
    </form>
  );
}

export default Form;