import React from 'react'

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img
            src='https://bulma.io/images/bulma-logo.png'
            alt='Logo'
            width='112'
            height='28'
          />
        </a>

        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <a href='/' className='navbar-item'>
              Home
            </a>
            <a href='/' className='navbar-item'>
              Documentation
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

// import React, { useState } from 'react';
// import { Section, Navbar } from 'react-bulma-components';

// const Topbar = () => {
  
//   return (
//     <Section>
//     <Navbar>
//     <Navbar.Brand>
//       <Navbar.Item renderAs="a" href="#">
//         <img
//           src="https://bulma.io/images/bulma-logo.png"
//           alt="Bulma: a modern CSS framework based on Flexbox"
//           width="112"
//           height="28"
//         />
//       </Navbar.Item>
//       <Navbar.Burger />
//     </Navbar.Brand>
//     <Navbar.Menu>
//       <Navbar.Container>
//         <Navbar.Item dropdown hoverable href="#">
//           <Navbar.Link>First</Navbar.Link>
//           <Navbar.Dropdown>
//             <Navbar.Item href="#">Subitem 1</Navbar.Item>
//             <Navbar.Item href="#">Subitem 2</Navbar.Item>
//           </Navbar.Dropdown>
//         </Navbar.Item>
//         <Navbar.Item href="#">Second</Navbar.Item>
//       </Navbar.Container>
//       <Navbar.Container position="end">
//         <Navbar.Item href="#">At the end</Navbar.Item>
//       </Navbar.Container>
//     </Navbar.Menu>
//   </Navbar>
// </Section>
    
//   )
// };

// export default Topbar;