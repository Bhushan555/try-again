import React from 'react'
import applogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import changeThemeIcon from '../assets/header/theme-switch.png'

const Headers = () => {
  return (
   <>
    <div className="headerClass">
      <div className="logo">
        <img src={applogo} alt="" />
      </div>
      <div className="searchWrap">
        <img src={searchIcon} alt="" />
        <input type="text" placeholder='Collection, Item or User' />
      </div>
      <div className="headerItems">
        <a href="#">Drops</a>
        <a href="#">Marketplace</a>
        <a href="#">Create</a>
      </div>
      <div className="headerActions">
        <div className="changeThemeWrap">
          <img src={changeThemeIcon} alt="" />
        </div>
        <button>Get In</button>
      </div>
    </div>
   </>
  )
}

export default Headers