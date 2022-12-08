import React from "react";
import { Link } from 'react-router-dom'
// Hello

const Header = () => {

  
  return (
    <header>
      <h2 className="header_title">Devmountain Eatery</h2>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/new-recipe">Add Recipe</Link>
      </nav>
    </header>
  );
};

export default Header;
