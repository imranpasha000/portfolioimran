import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './headerSocials'



const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h5>Helllo I'm</h5>
        <h1>Mohammad Imran</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
       <CTA/>
       <HeaderSocials/>

       <div className="me">
        <img src={ME} alt="me"/>
                </div>
        <a href="#contact" className='scroll__dwon'> scroll Down</a>
      </div>
    </header>

  );
}

export default Header
