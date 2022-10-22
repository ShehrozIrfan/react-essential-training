import "../App.css";

const header = ({ showAdd, handleShowAdd }) => {
  return (
    <div className="d-flex header">
      <div>
        <h3>ToDo App</h3>
      </div>
      <div>
        <button
          onClick={handleShowAdd}
          className={
            showAdd ? "btn btn-danger btn-sm" : "btn btn-sm btn-add-todo"
          }
        >
          {showAdd ? "Close" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default header;
