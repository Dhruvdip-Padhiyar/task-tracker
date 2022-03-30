import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShow, onclick }) => {
  const text = !onShow ? "close" : "Add";
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text={text} onClick={onclick} onshow={onShow} />
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
