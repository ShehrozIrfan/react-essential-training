import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [show, setShow] = useState({
    value: false,
    item: {},
  });

  const [showAdd, setShowAdd] = useState(false);

  //used to Hide/Show the Add form
  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  //Used to delete the Todo
  const handleDelete = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList([...newTodoList]);
  };

  //Used to add the Todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTodo = { id: id, text: todo, completed: false };
    setTodoList([...todoList, newTodo]);
  };

  //Used to update the `completed` key of Todo
  const handleComplete = (id) => {
    const newTodoList = todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setTodoList(newTodoList);
  };

  //Used to show the edit modal with the required values
  const handleEdit = (item) => {
    setShow({
      value: true,
      item: item,
    });
  };

  //Used to close the modal
  const handleClose = () => setShow({ value: false, item: {} });

  //Used to edit the Todo
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
      <div className="row justify-content-center center-vertically">
        <div className="col-md-6 wrap">
          <Header showAdd={showAdd} handleShowAdd={handleShowAdd} />
          {showAdd && <AddTodo addTodo={addTodo} />}
          {todoList.length > 0 ? (
            <Todos
              items={todoList}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              handleEdit={handleEdit}
            />
          ) : (
            <div className="no-todo">No task ToDo...</div>
          )}
          <EditTodo
            handleEdit={handleEdit}
            show={show.value}
            handleClose={handleClose}
            item={show.item}
            handleEditItem={handleEditItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
