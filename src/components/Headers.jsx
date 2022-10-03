import React from 'react'
import applogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png'

const Headers = () => {
  return (
   <>
    <div className="headerClass">
      <div className="logo">
        <img src={applogo} alt="" />
      </div>
      <div className="search-wrap">
        <img src={searchIcon} alt="" />
      </div>
    </div>
   </>
  )
}

export default Headers