import { useState } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import _ from "lodash";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdSearch } from "react-icons/md";

const Todos = ({
  items,
  sortAsc,
  showStatus,
  handleDelete,
  handleComplete,
  handleEdit,
  handleSort,
  handleShowAll,
  handleShowPending,
  handleShowCompleted,
  handleSearch,
}) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
    setSearchText("");
  };

  return (
    <div>
      <div className="sort-wrap mt-3">
        <button
          className={`btn btn-sm ${
            showStatus.showAll ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={handleShowAll}
        >
          Show All
        </button>
        <button
          className={`btn btn-sm ${
            showStatus.showPending ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={handleShowPending}
        >
          Pending
        </button>
        <button
          className={`btn btn-sm ${
            showStatus.showCompleted ? "btn-success" : "btn-outline-success"
          }`}
          onClick={handleShowCompleted}
        >
          Completed
        </button>
        <button
          className={`btn btn-outline-info btn-sm ${
            items.length < 2 && "disabled"
          }`}
          onClick={handleSort}
        >
          Sort by {`${sortAsc ? "Latest" : "Oldest"}`} on top
        </button>
      </div>
      {items.length > 0 && (
        <div className="search-wrap">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control p-2"
              placeholder="Search Todo..."
              value={searchText}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-primary btn-sm search-submit-btn"
            >
              <MdSearch />
            </button>
          </form>
        </div>
      )}
      {items.length > 0 ? (
        items.map((item) => (
          <div className="d-flex items-list items-list-wrap" key={item.id}>
            <OverlayTrigger
              delay={{ hide: 450, show: 300 }}
              overlay={(props) => (
                <Tooltip {...props}>
                  Double click to mark
                  {item.completed ? " todo" : " complete"}
                </Tooltip>
              )}
              placement="bottom"
            >
              <div
                className={
                  item.completed
                    ? "item-line-through adjust-wrap"
                    : "adjust-wrap"
                }
                onDoubleClick={() => handleComplete(item.id)}
              >
                {item.text}
              </div>
            </OverlayTrigger>
            <div className="d-flex">
              <div className="pr-10">
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleEdit(item)}
                >
                  <FaEdit />
                </button>
              </div>
              <div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item.id)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="no-todo">No ToDo found...</div>
      )}
    </div>
  );
};

export default Todos;
