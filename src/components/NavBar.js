import React from 'react'
import './NavBar.css'; 

const NavBar = () => {
  return (
    <div className='nav'>
      <nav>
          <h3 className="heading">DevFolio</h3>
        <ul className='links'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar