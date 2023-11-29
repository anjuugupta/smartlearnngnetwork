import React from 'react'
import { Link } from 'react-router-dom'

export const Head = () => {
  return (
    <div>
    <section className='head'>
    <div className='container flexSB'>
    <div className='logo'>
    <Link to="/">
    <img src="/learningnetwork-logo.png" alt="Learning Network Logo"  />
    </Link>
    </div>
    <div className='social'>
    <i className='fab fa-facebook-f icon'></i>
    <i className='fab fa-instagram icon'></i>
    <i className='fab fa-twitter icon'></i>
    <i className='fab fa-youtube icon'></i>
    </div>
    </div>
    </section>
    </div>
  )
}
