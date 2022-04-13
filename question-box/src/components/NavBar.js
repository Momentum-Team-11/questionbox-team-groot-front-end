import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Icon, Card, Media, Heading, Content, Image, Button, Container, Notification, Section } from 'react-bulma-components';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({ handleLogout, isLoggedIn }) => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  

  return (
    <nav
      className="navbar level" 
      role="navigation"
      aria-label="main navigation"
    >
      <div className="level-left">
        <div className="is-size-3 has-text-dark py-3 px-3 level-item">
          <Link to="/">
            <span className="icon is-large mr-1">
              <i className="fa-solid fa-book-bookmark"></i>
            </span>
            Phone a Friend!
          </Link>
        </div>
        
        <Link to="/search">
        <Icon><FontAwesomeIcon icon={faMagnifyingGlass} /></Icon>   
              </Link>
      
        
        
      </div>
      <div className="level-right mr-5">
        <div className="buttons level-item">
          {!isLoggedIn ? (
            <>
              <Link to="/register" className="button is-primary">
                <strong>Sign up</strong>
              </Link>
              <Link to="/login" className="button is-light">
                Log in
              </Link>
            </>
          ) : (
          <>
          <div className="navbar-item has-dropdown is-hoverable">
            <div 
            className="navbar-link"
            onClick={toggleNav}
            >
              My Menu
            </div>
              {(toggleMenu && (
            <div className="navbar-dropdown">
              <div className="navbar-item">
              {/* <Link to={`/my_questions/${user.pk}`}>My Questions</Link> */}
              <Link to='/my_questions'>My Questions</Link>
            </div>
            <div className="navbar-item">
              <Link to="/my_answers">My Answers</Link>
              </div>
            </div>
              )
              )}
              </div>
            <Link to="/logout" className="button is-primary" onClick={handleLogout}>
              Log Out
            </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
export default NavBar

// import 'bulma/css/bulma.min.css';
// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <div className="navbar">
//       <h5>NAVBAR</h5>
//       <img
//           src="./logo.png"
//           alt="Phone a friend logo"
//           width="112"
//           height="40"
//         />
//       <h1>Phone a Friend</h1>
//       <ul>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/home">Logout</Link></li>
//      	</ul>
//       <hr />
//     </div>
//   );
// };

// export default NavBar;