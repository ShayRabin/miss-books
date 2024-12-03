import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">דף הבית</Link>
        </li>
        <li>
          <Link to="/about">אודות</Link>
        </li>
        <li>
          <Link to="/book">רשימת ספרים</Link>
        </li>
        <li>
          <Link to="/book/edit">הוסף ספר חדש</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
