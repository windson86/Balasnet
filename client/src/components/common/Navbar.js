import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = (props) => {
  const {loggedIn, logout,level} = props

  return (
    <header>
      <nav className='navbar-custom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Link className='navbar-brand' to='/'>Balasnet</Link>
              <NavLink className='nav-link' activeClassName='active' exact to='/'>Home</NavLink>
              {loggedIn &&<NavLink className='nav-link' to='/predvorje'>Predvorje</NavLink>}
              {loggedIn && level>1 &&<NavLink className='nav-link' to='/dotovi'>Đotovi</NavLink>}
              {loggedIn && level>2 &&<NavLink className='nav-link' to='/izbjeglice'>Izbjeglice iz Besmisla</NavLink>}
           
        
          
             
              
        {loggedIn &&<NavLink className='nav-link-logout' onClick={logout} to='/'>Logout</NavLink>}
              {!loggedIn && <NavLink className='nav-link' to='/login'>Login</NavLink>}
              {!loggedIn && <NavLink className='nav-link' to='/register'>Register</NavLink>}
           
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar