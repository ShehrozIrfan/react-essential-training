import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import Pagination from "./components/Pagination";
import _ from "lodash";

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);

  //for sorting
  const [sortAsc, setSortAsc] = useState(false);

  //for status
  const [showStatus, setShowStatus] = useState({
    showAll: true,
    showPending: false,
    showCompleted: false,
  });

  // for filtering
  const [filteredList, setFilteredList] = useState(todoList);

  //storing the todos in the local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));

    if (showStatus.showPending) {
      handleShowPending();
    } else if (showStatus.showCompleted) {
      handleShowCompleted();
    } else {
      setFilteredList(todoList);
    }
  }, [todoList]);

  const todosPerPage = 5;
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

  //using lodash to order the todos in descending order based on created_at
  let currentTodos = sortTheTodoList(
    filteredList,
    ["created_at"],
    sortAsc ? ["asc"] : ["desc"]
  );

  //we need to slice only when the length is greater than the 5. Otherwise we don't need to slice, because it fits on the same page
  if (todoList.length > todosPerPage) {
    currentTodos = currentTodos.slice(indexOfFirstTodo, indexOfLastTodo);
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
    const newTodo = {
      id: id,
      text: todo,
      completed: false,
      created_at: new Date(),
    };
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

  const handleSort = () => {
    setSortAsc(!sortAsc);
  };

  const handleShowAll = () => {
    setShowStatus({ showAll: true, showPending: false, showCompleted: false });

    setFilteredList(todoList);
  };

  const handleShowPending = () => {
    setShowStatus({ showAll: false, showPending: true, showCompleted: false });

    const todosWithStatusPending = _.filter(todoList, ["completed", false]);
    setFilteredList(todosWithStatusPending);
  };

  const handleShowCompleted = () => {
    setShowStatus({ showAll: false, showPending: false, showCompleted: true });

    const todosWithStatusCompleted = _.filter(todoList, ["completed", true]);
    setFilteredList(todosWithStatusCompleted);
  };

  const handleSearch = (searchText) => {
    if (searchText.trim() === "") {
      if (showStatus.showPending) {
        handleShowPending();
      } else if (showStatus.showCompleted) {
        handleShowCompleted();
      } else {
        setFilteredList(todoList);
      }
    } else {
      const filteredData = filteredList.filter((item) => {
        return item.text.toLowerCase().includes(searchText.toLowerCase());
      });

      console.log(filteredList);
      console.log(filteredData);

      if (filteredData.length > 0) {
        console.log("insideset");
        setFilteredList(filteredData);
      }
    }
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

  function sortTheTodoList(list, sort_by, order) {
    //sort_by and order must be an array of strings to work properly with lodash order by
    return _.orderBy(list, sort_by, order);
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
              sortAsc={sortAsc}
              showStatus={showStatus}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              handleEdit={handleEdit}
              handleSort={handleSort}
              handleShowAll={handleShowAll}
              handleShowPending={handleShowPending}
              handleShowCompleted={handleShowCompleted}
              handleSearch={handleSearch}
            />
          ) : (
            <div className="no-todo">No ToDo found...</div>
          )}
          <EditTodo
            handleEdit={handleEdit}
            show={show.value}
            handleClose={handleClose}
            item={show.item}
            handleEditItem={handleEditItem}
          />
          {filteredList.length > todosPerPage && (
            <Pagination
              todosPerPage={todosPerPage}
              totalTodos={filteredList.length}
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
