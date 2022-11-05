import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import Pagination from "./components/Pagination";

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);

  //storing the todos in the local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const todosPerPage = 5;
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  let currentTodos = todoList;
  //we need to slice only when the length is greater than the 5. Otherwise we don't need to slice, because it fits on the same page
  if (todoList.length > todosPerPage) {
    currentTodos = todoList.slice(indexOfFirstTodo, indexOfLastTodo);
  }

  //for modal open, close
  const [show, setShow] = useState({
    value: false,
    item: {},
  });

  //for toggling the add section
  const [showAdd, setShowAdd] = useState(false);

  //used to Hide/Show the Add form
  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  //Used to delete the Todo
  const handleDelete = (id) => {
    //deleting the todo
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList([...newTodoList]);

    adjustTheCurrentPageAfterDeletion(newTodoList);
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

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //generic functions
  function adjustTheCurrentPageAfterDeletion(newTodoList) {
    //getting the last page before deletion
    const lastPageBeforeDeletion = Math.ceil(todoList.length / todosPerPage);

    //adjusting the pages after deletion, so that we are only the right page after deletion
    //we're adding checks on newTodoList, because at this moment the setTodoList is called, but the component is not re-rendered
    //so, at this point, we're not getting the exact values, that's why using newTodoList for checks
    if (currentPage === lastPageBeforeDeletion && newTodoList.length > 0) {
      let lastPageAfterDeletion = Math.ceil(newTodoList.length / todosPerPage);
      if (lastPageAfterDeletion !== lastPageBeforeDeletion) {
        setCurrentPage(lastPageAfterDeletion);
      }
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center center-vertically m-2">
        <div className="col-md-6 wrap">
          <Header showAdd={showAdd} handleShowAdd={handleShowAdd} />
          {showAdd && <AddTodo addTodo={addTodo} />}
          {todoList.length > 0 ? (
            <Todos
              items={currentTodos}
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
          {todoList.length > todosPerPage && (
            <Pagination
              todosPerPage={todosPerPage}
              totalTodos={todoList.length}
              handlePaginate={handlePaginate}
              isActive={currentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
