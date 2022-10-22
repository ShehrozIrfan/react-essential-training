import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Todos = ({ items, handleDelete, handleComplete, handleEdit }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="d-flex items-list" key={item.id}>
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
            <div>
              <button onClick={() => handleEdit(item)}>Edit</button>
            </div>
            <div>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
