// import React, { useState } from 'react';
// import { Section, Navbar } from 'react-bulma-components';
// import { Link } from 'react-router-dom';



// const Topbar = ({isLoggedIn }) => {
  
//   console.log(isLoggedIn)
//   const [toggleMenu, setToggleMenu] = useState(false)


//     const toggleNav = () => {
//       setToggleMenu(!toggleMenu)
//     }

//   return (
//     // <Section >
//     <Navbar color="primary" m="3" p="3">
//     <Navbar.Brand>
//       <Navbar.Item href="#">
//         <img
//           src="./logo.png"
//           alt="Phone a friend logo"
//           // width="112"
//           // height="40"
//         />
//       </Navbar.Item>
  
//     </Navbar.Brand>

//       <Navbar.Container>
        
//         <Navbar.Item><Link to="/home">Home</Link></Navbar.Item>
//       </Navbar.Container>
//       {/* <Navbar.Container position="end"> */}
  
//       { !isLoggedIn ? (
//         <>
//           <Navbar.Item position="end">
//             <Link to="/login">Login</Link>
//           </Navbar.Item> 
//           <Navbar.Item position="end">
//             <Link to="/Register">Register</Link>
//           </Navbar.Item> 
//         </>
//       ) : (
//         <>
//           <Navbar.Item hoverable position="end">
//             <Navbar.Link
//               onClick={toggleNav}
//               position="end"
//             >
//               My Menu
//           </Navbar.Link>
//           {(toggleMenu && (
//             <Navbar.Dropdown>
//               <Navbar.Item><Link to="/my_questions">My Questions</Link></Navbar.Item>
//               <Navbar.Item><Link to="/my_answers">My Answers</Link></Navbar.Item>
//             </Navbar.Dropdown>
//             )
//           )}
//         </Navbar.Item>
//           <Navbar.Item position="end">
//             <Link to="/logout">Logout</Link>
//           </Navbar.Item> 
//         </> 
//         )
//     }
//   </Navbar>
// // </Section>
    
//   )
// };

// export default Topbar;


// import { useState } from "react";
// // import 'bulma/css/bulma.min.css';
// import { Button } from 'react-bulma-components';
// // import logo from './logo.png';

// const Topbar = ({isLoggedIn }) => {
//   const [isActive, setisActive] = useState(false)

//   return (
//     <nav className='navbar' role='navigation' aria-label='main navigation'>
      
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
//         <div className="navbar-item has-dropdown">
//         <div className="navbar-link">
//           Menu
//         </div>

//   <div className="navbar-dropdown">
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

// export default Topbar;