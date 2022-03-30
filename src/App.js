import { useState } from "react";

/* Components */
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  /**
   ***** useState() hook ******
   * tasks: Readonly variable
   * setTasks : Function to update the state (setter function)
   * useState(initializer) : Hook to create the state (initializer: string | number | array | object | boolean)
   */
  const [tasks, setTasks] = useState(); //Internal component state

  //Delete Task
  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  // Toggle reminder

  // const toggleReminder = (id) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, reminder: !task.reminder } : task
  //     )
  //   );
  // };

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
