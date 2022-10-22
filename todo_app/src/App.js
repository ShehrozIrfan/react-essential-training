import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";

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

  const [show, setShow] = useState({
    value: false,
    item: {},
  });

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
    const newTodoList = todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setTodoList(newTodoList);
  };

  const handleEdit = (item) => {
    console.log("handle edit");
    console.log(item);
    setShow({
      value: true,
      item: item,
    });
  };

  const handleClose = () => setShow({ value: false, item: {} });

  const handleEditItem = (item_edit) => {
    // closes the modal
    handleClose();
    const newTodoList = todoList.map((item) =>
      item.id === item_edit.id
        ? { ...item, text: item_edit.text, completed: item_edit.completed }
        : item
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
          handleEdit={handleEdit}
        />
      ) : (
        "No Todo found! Try adding one"
      )}
      <EditTodo
        handleEdit={handleEdit}
        show={show.value}
        handleClose={handleClose}
        item={show.item}
        handleEditItem={handleEditItem}
      />
    </div>
  );
}

export default App;
