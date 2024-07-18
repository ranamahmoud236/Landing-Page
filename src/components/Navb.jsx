import React from 'react'
import './Navb.css'

const Navb = () => {
  return (
    <div>
        <nav className='navBar'>
        <ul className='nav_menu'>
          <li className='menuItem'>
            <a href='#'>Home</a>
          </li>
          <li className='menuItem'>
            <a href='#'>About</a>
          </li>
          <li className='menuItem'>
            <a href='#'>Contact</a>
          </li>
         

        </ul>

        <a href='#' className='logo'>Landing</a>

        
        <button className='navBtn'>Bay Now</button>

      </nav>
    

    </div>
  )
}

export default Navb
