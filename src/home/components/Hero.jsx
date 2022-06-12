import React from 'react'
import hero from '../styles/hero/hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='title-container'>
        <div className='title'>Algorythmia</div>
        <div className='phrase'> ● YOU MAY HAVE IT</div>
      </div>
      <div className='featured-container'>
        <div className='container1'>
          <div className='container1-image'>Image</div>
          <div className='container1-product-price-container'>
            <div className='container1-product-title'>Dungeons Sweatshirt</div>
            <div className='container1-price'>$30</div>
          </div>
        </div>
        <div className='container2'>
          <div className='container2-image'>Image</div>
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

       <iframe className='iframe' src="https://www.youtube.com/embed/SpeSpA3e56A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
    </div>
  )
}

export default Hero