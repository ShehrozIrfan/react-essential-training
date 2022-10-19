import PropTypes from "prop-types";

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

// Adding the default prop, in case when there is no title prop passed, then the default prop will be used.
Header.defaultProps = {
  title: "Task Tracker App!",
};

// Adding the prop type title to string.
// Or you can use typescript with react to implement this
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
