import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/person" className="link">
        Person
      </Link>
    </nav>
  );
}

export default Navbar;
