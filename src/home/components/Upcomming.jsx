import React from 'react'
import upcomming from '../styles/upcomming/upcomming.css'
import upcomming1 from '../../assets/FollowTheLeaderPoster.jpeg'
import upcomming2 from '../../assets/FollowTheLeaderPoster02.jpeg'
import upcomming3 from '../../assets/FollowTheLeaderPoster03.jpeg'
const Upcomming = () => {
  return (
    <div className='upcomming'>
      <h1>UPCOMMING</h1>
      <div className='up-containers'>
        <img className='up-container1' src={upcomming1}/>
        <img className='up-container2' src={upcomming2}/>
        <img className='up-container3' src={upcomming3}/>
      </div>
    </div>
  )
}

export default Upcomming