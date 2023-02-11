import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'


const headerSocials = () => {
  return (
    <div className='header__socials'>
       
       <a href="https://www.linkedin.com/in/mohammad-imran-8007a61b1/" target="_black"><BsLinkedin/></a>
       <a href="https://github.com/imranpasha000" target="_black"><BsGithub/></a>
       <a href="https://leetcode.com/imranpasha/" target="_black"><SiLeetcode/></a>
      
    </div>
  )
}

export default headerSocials
