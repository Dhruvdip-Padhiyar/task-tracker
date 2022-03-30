import React, { useRef } from "react";

const AddTask = ({ onAddTask }) => {
  /* Refrences to diffrent elements */
  const textRef = useRef(null);
  const dayRef = useRef(null);
  const reminderRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); //<---refresh stop
    const textValue = textRef.current.value;
    const dayValue = dayRef.current.value;
    const reminderValue = reminderRef.current.checked;

    if (!textValue) {
      alert("please add a task");
      return;
    }

    onAddTask({ text: textValue, day: dayValue, reminder: reminderValue });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" ref={textRef} />
      </div>

      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Day & Time" ref={dayRef} />
      </div>
      <div className="form-control form-control-check">
        <lable>Reminder</lable>
        <input type="checkbox" ref={reminderRef} />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
