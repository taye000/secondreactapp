import React from "react";
import Button from "./Button";

const onClick = () => console.log("click");
const Header = () => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color="green" text="Hello" />
    </header>
  );
};

export default Header;
