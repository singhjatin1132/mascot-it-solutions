'use client'

import React, { useState } from 'react'

const Header = () => {

  return ( <div>
      <header className="header">
  <nav className="navbar container">
     
    <div className="order-0">
      <a href="/">
        <img src="https://mascotitsolutions.com/assets/images/retina-logo.png" height="30" width="147" alt="logo" />
      </a>
    </div>
 
    <input id="nav-toggle" type="checkbox" className="hidden" />
    <label
      id="show-button"
      for="nav-toggle"
      className="order-1 flex cursor-pointer items-center lg:order-1 lg:hidden"
    >
      <svg className="h-6 fill-current" viewBox="0 0 20 20">
        <title>Menu Open</title>
        <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
      </svg>
    </label>
    <label
      id="hide-button"
      for="nav-toggle"
      className="order-2 hidden cursor-pointer items-center lg:order-1"
    >
      <svg className="h-6 fill-current" viewBox="0 0 20 20">
        <title>Menu Close</title>
        <polygon
          points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
          transform="rotate(45 10 10)"
        ></polygon>
      </svg>
    </label> 
    <ul
      id="nav-menu"
      className="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-center lg:space-x-5"
    >
      <li className="nav-item">
        <a href="" className="nav-link active">Home</a>
      </li>
      
      
      <li className="nav-item nav-dropdown group relative">
        <span className="nav-link inline-flex items-center">
          Solutions
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </span>
        <ul
          className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
          <li className="nav-dropdown-item">
            <a href="software" className="nav-dropdown-link">Software</a>
          </li>
          <li className="nav-dropdown-item">
            <a href="hardware" className="nav-dropdown-link">Hardware</a>
          </li>

          
        </ul>
      </li>


      <li className="nav-item nav-dropdown group relative">

        <span className="nav-link inline-flex items-center">
          Projects
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </span>

        <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">

          <li className="nav-dropdown-item">
            <a href="WMS" className="nav-dropdown-link">WMS</a>
          </li>
          <li className="nav-dropdown-item">
            <a href="TMS" className="nav-dropdown-link">TMS</a>
          </li>
          <li className="nav-dropdown-item">
            <a href="collegeERP" className="nav-dropdown-link">College ERP</a>
          </li>
          <li className="nav-dropdown-item">
            <a href="otherSolutions" className="nav-dropdown-link">Other Solutions</a>
          </li>
          
        </ul>


      </li>



      <li className="nav-item">
        <a href="about" className="nav-link">About Us</a>
      </li>
      <li className="nav-item">
        <a href="contactus" className="nav-link">Contact Us</a>
      </li>
      <li className="nav-item mt-3.5 lg:hidden">
        <a className="btn btn-white btn-sm border-border" target="_blank" href="https://web.whatsapp.com/send?phone=919810073129&text=Welcome%20to%20Mascot%20IT%20Solutions."
          >Get Quote</a
        >
        
      </li>
    </ul>
    <div className="order-1 ml-auto hidden items-center md:order-2 md:ml-0 lg:flex">
    <a className="btn btn-white btn-sm border-border" target="_blank" href="https://web.whatsapp.com/send?phone=919810073129&text=Welcome%20to%20Mascot%20IT%20Solutions."
          >Get Quote</a
        >
    </div>
  </nav>
</header>
    </div>
  )
}

export default Header