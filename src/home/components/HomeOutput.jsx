import React from 'react'
import Hero from './Hero'
import Video from './Video'
import Upcomming from './Upcomming'
import Footer from './Footer'

const HomeOutput = () => {
  return (
    <div className='app'>
      <Hero/>
      <Video/>
      <Upcomming/>
      <Footer/>
    </div>
  )
}

export default HomeOutput