import React from 'react'
import { Link } from 'react-router-dom'
import "./MainNavbar.scss"

function MainNavbar() {
  return (
    <header>
        <nav className='main_nav'>
          <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
            <ul>
                <li><Link to={"/"}>home</Link></li>
                <li><Link to={"/about"}>about</Link></li>
                <li><Link to={"/contact"}>contact</Link></li>
                <li><Link to={"/basket"}><i class="fa-solid fa-cart-shopping"></i></Link></li>
                <li><Link to={"/wishlist"}><i class="fa-solid fa-heart"></i></Link></li>
            </ul>
            <div className='dropdown'><i class="fa-solid fa-bars"></i></div>
        </nav>
    </header>
  )
}

export default MainNavbar