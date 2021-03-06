import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

/* Components */
import Header from "./components/Header.js";
import TasksList from "./components/TasksList.js";
import AddTask from "./components/AddTask.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [tasks, setTasks] = useState([]);

  const dbUrl = "http://localhost:5000/tasks";

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();

      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(dbUrl);
    const data = await res.json();
    return data;
  };

  // Fetch Tasks
  const fetchTask = async (id) => {
    const res = await fetch(`${dbUrl}/${id}`);
    const data = await res.json();
    return data;
  };

  //Add Task
  const addTask = async (task) => {
    const res = await fetch(dbUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const displayForm = () => {
    setShowForm(!showForm);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`${dbUrl}/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);

    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`${dbUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await res.json(updatedTask);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header onShow={showForm} onclick={displayForm} />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {showForm && <AddTask onAddTask={addTask} />}

                {tasks.length > 0 ? (
                  <TasksList
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "no tasks"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
