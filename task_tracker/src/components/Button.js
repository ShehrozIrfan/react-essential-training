import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <>
      <button>{text}</button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
