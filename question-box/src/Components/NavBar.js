import 'bulma/css/bulma.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <h5>NAVBAR</h5>
      <img
          src="./logo.png"
          alt="Phone a friend logo"
          width="112"
          height="40"
        />
      <h1>Phone a Friend</h1>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/home">Logout</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;