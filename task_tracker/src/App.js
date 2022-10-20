import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      date: "10:40 PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Read Book",
      date: "6:00 PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Have Lunch",
      date: "1:15 PM",
      reminder: true,
    },
  ]);

  const handleClick = (e) => {
    console.log("Click", e);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    //generating a random id
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header title="Task Tracker App" />
      <Button
        text="Add"
        classes="btn btn-primary btn-sm"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={handleDelete}
          toggleReminder={toggleReminder}
        />
      ) : (
        <h5>No tasks found!</h5>
      )}
    </div>
  );
}

export default App;
