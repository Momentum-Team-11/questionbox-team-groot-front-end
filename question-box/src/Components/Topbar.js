import React, { useState } from 'react';
import { Section, Navbar } from 'react-bulma-components';
import { Link } from 'react-router-dom';

const Topbar = ({isLoggedIn, logout }) => {
  console.log(logout)
  console.log(isLoggedIn)
  return (
    // <Section >
    <Navbar color="info" m="3" p="3">
    <Navbar.Brand>
      <Navbar.Item renderAs="a" href="#">
        <img
          src="./logo.png"
          alt="Phone a friend logo"
          // width="112"
          // height="40"
        />
      </Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container>
        <Navbar.Item dropdown hoverable href="#">
          <Navbar.Link>My Menu</Navbar.Link>
          <Navbar.Dropdown>
            <Navbar.Item href="#">My Questions</Navbar.Item>
            <Navbar.Item href="#">My Answers</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
        <Navbar.Item><Link to="/home">Home</Link></Navbar.Item>
      </Navbar.Container>
      {/* <Navbar.Container position="end"> */}
  
      { !isLoggedIn ? (
        <Navbar.Item position="end">
          <Link to="/login">Login</Link>
        </Navbar.Item> 
        ) : (
        <Navbar.Item position="end" onClick={logout}>
          <Link to="/home">Logout</Link>
        </Navbar.Item>  
        )
      }
        <Navbar.Item position="end">
        <ul>
            <li><Link to="/home">Home</Link></li>
          </ul>
        </Navbar.Item>
      {/* </Navbar.Container> */}
    </Navbar.Menu>
  </Navbar>
// </Section>
    
  )
};

export default Topbar;


// import { useState } from "react";
// // import 'bulma/css/bulma.min.css';
// import { Button } from 'react-bulma-components';
// // import logo from './logo.png';

// export default function Topbar() {
//   const [isActive, setisActive] = useState(false)

//   return (
//     <nav className='navbar is-info' role='navigation' aria-label='main navigation'>
      
//       <div className='navbar-brand'>
//         <div className='navbar-item'>
//           <img
//             source="./logo.png"
//             alt='logo'
//             // width='112'
//             // height='28'
//           />
//         </div>

//         {/* <a
//           onClick={() => {
//             setisActive(isActive)
//           }}
//           role='button'
//           className="navbar-burger"
//           className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
//           aria-label='menu'
//           aria-expanded='false'
//           // data-target='navbarBasicExample'
//         >
//           <span aria-hidden='true'></span>
//           <span aria-hidden='true'></span>
//           <span aria-hidden='true'></span>
//         </a> */}
//       </div>
//       <div id="navbar-start">
//         <div id="navbar-item>">
//         <header color="white">Phone a Friend!</header>
//         </div>
//         <div class="navbar-item has-dropdown">
//         <a class="navbar-link" href='/'>
//           Menu
//         </a>

//   <div class="navbar-dropdown">
//     <div className='navbar-item'>
//       1
//     </div>
//   </div>
// </div>
//       </div>
//       {/* <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}> */}
//         <div className='navbar-end'>
//           <div className='navbar-item'>
//             <Button color="" href='/' className='navbar-item'>
//               Home
//             </Button>
//             <a href='/' className='navbar-item'>
//               Logout
//             </a>
//           </div>
//         {/* </div> */}
//       </div>
//     </nav>
//   )
// }