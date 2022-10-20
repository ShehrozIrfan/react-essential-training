import PropTypes from "prop-types";

const Button = ({ text, classes, onClick }) => {
  return (
    <>
      <button className={classes} onClick={onClick}>
        {text}
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
