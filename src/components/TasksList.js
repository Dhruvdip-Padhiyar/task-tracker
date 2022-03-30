import React from "react";

import Task from "./Task";

const TasksList = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

TasksList.defaultProps = {
  tasks: [],
};

export default TasksList;
