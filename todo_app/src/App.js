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
  return (
    <div className="container">
      <Header />
      <Items items={todoList} />
    </div>
  );
}

export default App;
