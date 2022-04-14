import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Icon, Card, Media, Heading, Content, Image, Button, Container, Notification, Section } from 'react-bulma-components';
import { faHomeLg, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavBar = ({ handleLogout, isLoggedIn }) => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  

  return (
    <>
      <div id="top">
      <br></br>
      </div>
    <nav
      className="navbar level ml3" 
      role="navigation"
      aria-label="main navigation"
      
    >
      <div className="level-left">
        <div className="is-size-1 has-text-dark py-3 px-3 level-item">
        <img className="ml-5"
          src="/phone-teal.jpeg"
          alt="Phone a friend logo"
          width="100"
          height="40"
        />
          <Link to="/">
            <span id="top" className="top-title">
            <p className="top">Phone a Friend</p>
            </span>
          </Link>
        </div>
        
        
      
        
        
      </div>
      <div className="level-right mr-5">
        <div className="buttons level-item">
        <Link to="/search">
        <Icon className="mr-4 "><FontAwesomeIcon icon={faMagnifyingGlass} /></Icon>   
              </Link>
              <Link to="/">
        <Icon className="mr-4"><FontAwesomeIcon icon={faHomeLg} /></Icon>   
              </Link>
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
    </>
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