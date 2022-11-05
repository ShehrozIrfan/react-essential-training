import { useState, useEffect } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import _ from "lodash";

const Todos = ({
  items,
  sortAsc,
  handleDelete,
  handleComplete,
  handleEdit,
  handleSort,
}) => {
  return (
    <div>
      {items.length > 1 && (
        <div className="sort-wrap">
          <button className="btn btn-info btn-sm" onClick={handleSort}>
            Sort by {`${sortAsc ? "Latest" : "Oldest"}`} on top
          </button>
        </div>
      )}
      {items.map((item) => (
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
      ))}
    </div>
  );
};

export default Todos;
