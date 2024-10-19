import React from 'react'
import './Header.css'
import profilrImg from './../../assets/portrait-white-man-isolated_53876-40306.jpg'
import { BellAlertIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <div>
      <div className="header">
        <input className='search-box' type="text" placeholder='Search' />
        <div className="profile">
          <div className="user-information">
            <h1>Villyam Johnson</h1>
            <p>villiam.john@gmail.com</p>
          </div>
          <img src={profilrImg} alt="profile image" />
          <button><a href="#"><BellAlertIcon /></a></button>
          <button><a href="#"><BriefcaseIcon /></a></button>
        </div>
      </div>
    </div>
  )
}
