import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
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
    const newTodoList = todoList.filter((item) => item.id != id);
    setTodoList([...newTodoList]);
  };
  return (
    <div className="container">
      <Header />
      {todoList.length > 0 ? (
        <Items items={todoList} handleDelete={handleDelete} />
      ) : (
        "No Todo found! Try adding one"
      )}
    </div>
  );
}

export default App;
