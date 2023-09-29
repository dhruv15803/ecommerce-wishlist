import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {

  const showLinks = ()=>{
    const links = document.getElementsByClassName('nav-links')[0];
    links.classList.toggle('active');
  }

  return (
    <>
    <nav id="navbar">
        <div id="navLeft">
            <Link to='/' style={{textDecoration:'none',color:'black'}}>CompanyName</Link>
        </div>
        <ul className="nav-links">
            <div><li><Link to="/" onClick={showLinks}>Men's clothing</Link></li></div>
            <div><li><Link to="/womens" onClick={showLinks}>Women's clothing</Link></li></div>
            <div><li><Link to="/jewelery" onClick={showLinks}>Jewelery</Link></li></div>
            <div><li><Link to="/electronics" onClick={showLinks}>Electronics</Link></li></div>
        </ul>
        <div id="navRight">
            <Link to='/Cart'><button className="navBtn">{`Cart(${props.cart.length})`}</button></Link>
            <Link to='/Cart' style={{color:'black'}}><i className="fa-solid fa-cart-shopping" style={{color:'#00000'}}></i></Link>
            {/* <Link to='/wishlist'><button className="navBtn">wishlist</button></Link> */}
        </div>
        <div id="hamburger" onClick={showLinks}>
          <i className="fa-solid fa-bars" style={{color:'#00000'}}></i>
        </div>
    </nav>
    </>
  )
}
