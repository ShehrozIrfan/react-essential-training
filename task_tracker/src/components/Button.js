import PropTypes from "prop-types";

const Button = ({ text, classes }) => {
  return (
    <>
      <button className={classes}>{text}</button>
    </>
  );
};

Button.defaultProps = {
  classes: "btn btn-primary btn-sm",
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
