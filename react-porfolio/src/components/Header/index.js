import React from 'react'
// import './Header.css'
import author from './me.png'

const Header = () => {
  return (
    <div className='Header'>
        <img src={author} alt= "Humberto Rico"/>
        <h1> porfolio </h1>
    </div>
  )
}

export default Header