import { useState } from "react";

/* Components */
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "30 march 2:30 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "School meeting",
      day: "31 march 12:30 pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Gaming",
      day: "01 april 10:30 am",
      reminder: false,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
    console.log([...tasks, newTask]);
  };

  const showForm = () => {
    setShowAddTask(!showAddTask);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onShow={showAddTask} onclick={showForm} />
      {showAddTask && <AddTask onAddTask={addTask} />}

      {tasks.length > 0 ? (
        <TasksList
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        "no tasks"
      )}
    </div>
  );
}

export default App;

/* Guide */
/**
 ***** useState() hook ******
 * tasks: Readonly variable
 * setTasks : Function to update the state (setter function)
 * useState(initializer) : Hook to create the state (initializer: string | number | array | object | boolean)
 */
