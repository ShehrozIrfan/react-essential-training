import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "Prepare the monthly report",
      completed: false,
    },
    {
      id: 2,
      text: "Lunch with Zack",
      completed: false,
    },
    {
      id: 3,
      text: "Buy gift cards",
      completed: false,
    },
    {
      id: 4,
      text: "Get Groceries",
      completed: false,
    },
  ]);

  const handleDelete = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList([...newTodoList]);
  };

  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTodo = { id: id, text: todo, completed: false };
    setTodoList([...todoList, newTodo]);
  };

  const handleComplete = (id) => {
    console.log(`Complete: ${id}`);
    const newTodoList = todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setTodoList(newTodoList);
  };

  return (
    <div className="container">
      <Header />
      <AddTodo addTodo={addTodo} />
      {todoList.length > 0 ? (
        <Todos
          items={todoList}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ) : (
        "No Todo found! Try adding one"
      )}
    </div>
  );
}

export default App;
