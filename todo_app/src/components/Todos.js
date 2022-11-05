import { useState, useEffect } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import _ from "lodash";

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
}) => {
  return (
    <div>
      <div className="sort-wrap">
        <button
          className={`btn btn-primary btn-sm ${
            showStatus.showAll && "disabled"
          }`}
          onClick={handleShowAll}
        >
          Show All
        </button>
        <button
          className={`btn btn-warning btn-sm ${
            showStatus.showPending && "disabled"
          }`}
          onClick={handleShowPending}
        >
          Pending
        </button>
        <button
          className={`btn btn-success btn-sm ${
            showStatus.showCompleted && "disabled"
          }`}
          onClick={handleShowCompleted}
        >
          Completed
        </button>
        <button
          className={`btn btn-info btn-sm ${items.length < 2 && "disabled"}`}
          onClick={handleSort}
        >
          Sort by {`${sortAsc ? "Latest" : "Oldest"}`} on top
        </button>
      </div>
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
                className={item.completed ? "item-line-through" : ""}
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
                  Edit
                </button>
              </div>
              <div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
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
