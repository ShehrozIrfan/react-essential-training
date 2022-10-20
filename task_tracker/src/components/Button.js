import PropTypes from "prop-types";

const Button = ({ text, classes, onAdd, showAddTask }) => {
  return (
    <>
      <button
        className={showAddTask ? "btn btn-danger btn-sm" : classes}
        onClick={onAdd}
      >
        {showAddTask ? "Close" : text}
      </button>
    </>
  );
};

Button.defaultProps = {
  classes: "btn btn-primary btn-sm",
};

Button.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
