import React from 'react'
import { ArrowLeftStartOnRectangleIcon, Cog6ToothIcon, FireIcon, HomeIcon, NewspaperIcon, PresentationChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/mark.svg'
import './NavBar.css'

export default function Header() {
  return (
    <>
        <div className='sidebar'>
            <img src={logo} alt="Logo" className='logo' />
            <nav>
                <ul>
                    <li className='active'><a href="#"><HomeIcon /></a></li>
                    <li><a href="#"><FireIcon /></a></li>
                    <li><a href="#"><UserGroupIcon /></a></li>
                    <li><a href="#"><PresentationChartBarIcon /></a></li>
                    <li><a href="#"><NewspaperIcon /></a></li>
                </ul>
            </nav>
            <div className='profile-section'>
                <li><a href="#"><Cog6ToothIcon /></a></li>
                <li><a href="#"><ArrowLeftStartOnRectangleIcon /></a></li>
            </div>
        </div>
    </>
  )
}
