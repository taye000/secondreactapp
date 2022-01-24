import React from "react";
import { useLocation } from "react-router-dom";

const Header = ({ onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <input
          type="submit"
          className="btn"
          color="green"
          text="Add"
          onClick={onAdd}
        />
      )}
    </header>
  );
};

export default Header;
