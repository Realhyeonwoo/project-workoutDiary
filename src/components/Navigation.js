import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>

      <NavLink exact to="/sportslist">
        SportsList
      </NavLink>
    </div>
  );
};

export default Navigation;
