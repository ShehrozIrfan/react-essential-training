const header = ({ showAdd, handleShowAdd }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="d-flex header">
          <div>
            <h3>ToDo App</h3>
          </div>
          <div>
            <button
              onClick={handleShowAdd}
              className={
                showAdd ? "btn btn-danger btn-sm" : "btn btn-success btn-sm"
              }
            >
              {showAdd ? "Close" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
