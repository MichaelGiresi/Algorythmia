import React from 'react'
import hero from '../styles/hero/hero.css'
import feature1 from '../../assets/Wethreeheads01.jpeg'
import feature2 from '../../assets/Brokengrid01.jpeg'
import logo from '../../assets/AlgorythmiaLogotypeGif.gif'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='title-container'>
        <img className='title' src={logo}/>
        <div className='phrase'> ● YOU MAY HAVE IT</div>
      </div>
      <div className='featured-container'>
        <div className='container1'>
          <img className='container1-image'src={feature1}/>
          <div className='container1-product-price-container'>
            <div className='container1-product-title'>Dungeons Sweatshirt</div>
            <div className='container1-price'>$30</div>
          </div>
        </div>
        <div className='container2'>
          <img className='container2-image' src={feature2}/>
          <div className='container2-product-price-container'>
            <div className='container2-product-title'>Brainded Clock</div>
            <div className='container2-price'>$300</div>
          </div>
        </div>
        <div className='info'>
            <h6>FEATURED</h6>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        </div>
      </div>
      <div className='video'>

       <iframe className='iframe' src="https://www.youtube.com/embed/SpeSpA3e56A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      </div>
    </div>
  )
}

export default Hero