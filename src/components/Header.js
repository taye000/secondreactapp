import React from "react";

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <input
        type="submit"
        className="btn"
        color="green"
        text="Add"
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
