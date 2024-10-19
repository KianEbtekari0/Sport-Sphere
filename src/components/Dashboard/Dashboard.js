import React from 'react'
import '../Dashboard/Dashboard.css'
import ManCity from './../../assets/manchesterCity.png'
import Milan from './../../assets/interMilan.png'
import Header from './../Header/Header'

export default function Dashboard() {
  return (
    <>
      <div className='dashboard_container'>
        <Header />
        <div className="match-day">
          <div className="match-day-teams image-filter">
            <div className="team team-one">
              <div className="team-content">
                <img src={Milan} alt="team logo" />
                <p>Inter Milan</p>
              </div>
              <div className="goal">
                <p>0</p>
              </div>
            </div>
            <div className="match-status">
              <div className="match-time">
                <h3>45'</h3>
                <p>Half-Time</p>
              </div>
            </div>
            <div className="team team-two">
              <div className="goal">
                <p>1</p>
              </div>
              <div className="team-content">
                <p>Manchester City</p>
                <img src={ManCity} alt="team logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="players">

      </div>
    </>
  )
}
