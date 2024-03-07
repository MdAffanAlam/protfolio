import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-gradient-to-r from-purple-700 via-purple-600 to-blue-500 p-4'>
    <nav className='flex justify-between items-center'>
      <h3 className="text-white">DevFolio</h3>
      <ul className='flex gap-4'>
        <li><Link to="/intro" className='text-white'>Home</Link></li>
        <li><Link to="/about" className='text-white'>About</Link></li>
        <li><Link to="/projects" className='text-white'>Projects</Link></li>
        <li><Link to="/contact" className='text-white'>Contact</Link></li>
      </ul>
    </nav>
  </div>
  )
}

export default NavBar