import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShow, onclick }) => {
  const text = !onShow ? "Add" : "Close";
  const color = !onShow ? "green" : "red";
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={color} text={text} onClick={onclick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
