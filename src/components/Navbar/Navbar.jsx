import React, { useState } from 'react'

const Navbar = () => {
  const [hamburger, sethambuger] = useState(false)
 
  
  return (
    <>
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className={`container d-flex align-items-center justify-content-between ${hamburger?"mobile-nav-active":""}`}>
        <a
          href="/"
          className="logo d-flex align-items-center me-auto me-lg-0"
        >
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1>
            <span><img src='https://static.wixstatic.com/media/63eac2_271e9f221e5c4fa0a55f186e08742abe~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Mushroom%20World%20Logo%202021%20Final%20PNG%20(Gree.png'/></span>
            Mushroom world <span>.</span>
          </h1>
        </a>
        <nav id="navbar" className={`navbar `}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Shop">shop</a>
            </li>
            <li>
              <a href="/Blog">Blog</a>
            </li>
            <li>
              <a href="/ContactUs">Contact</a>
            </li>
            <li>
              <a href="/TradeEnquiry">Trade Enquiry</a>
            </li>
       
            <li>
              <a href="/">More</a>
            </li>
          </ul>
        </nav>
        {/* .navbar */}
        <a className="btn-book-a-table" href="#book-a-table">
     LOG IN
        </a>
        <i className={`mobile-nav-toggle mobile-nav-show bi ${hamburger?"bi-x":"bi-list"} `} onClick={e => sethambuger(!hamburger)}/>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" onClick={e => sethambuger(!hamburger)}/>
      </div>
    </header>
    {/* End Header */}
  </>
  )
}

export default Navbar