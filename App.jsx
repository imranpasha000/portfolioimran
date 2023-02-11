import React from 'react'
import Header from './componenets/header/Header'
import About from './componenets/about/About'
import Experience from './componenets/experience/Experience'
import Portfolio from './componenets/portfolio/Portfolio'
import Services from './componenets/services/Services'
import Footer from './componenets/footer/Footer'
import Contact from './componenets/contact/Contact'
import Nav from './componenets/nav/Nav'
import Testimonials from './componenets/testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </>
  )
  }

export default App
