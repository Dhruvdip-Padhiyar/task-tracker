import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  const deleteTask = () => onDelete(task.id);
  const toggleReminder = () => onToggle(task.id);

  const reminder = task.reminder ? "reminder" : "";

  return (
    <div className={`task  ${reminder}`} onDoubleClick={toggleReminder}>
      <h3>
        {task.text} <FaTimes onClick={deleteTask} style={{ color: "red" }} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
