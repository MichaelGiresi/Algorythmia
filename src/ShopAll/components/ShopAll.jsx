import React from 'react'
import shopall from '../styles/allProducts/shopall.css'


const ShopAll = () => {
  return (
    <div className="sa-hero">
            <div className="sa-headings-container">
                <h1>All Products</h1>
                <h6> YOU MAY HAVE IT</h6>
            </div>
            <div className="sa-info-images-container">
                <div className="sa-info-container">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</div>
                <div className="sa-images-container">
                    <div className="sa-images-innercontainer1">
                        <div className="sa-images-innercontainer1-leftslides">
                            <div className="sa-images-innercontainer1-slide1">
                                <div className='sa-imagecontainer-slide1'>1</div>
                                <div className='sa-slide1-info'>
                                    <div className='sa-slide1-title'>Dungeons Sweatshirt</div>
                                    <div className='sa-slide1-price'>$30</div>
                                </div>
                            </div>
                            <div className="sa-images-innercontainer1-slide2">
                                
                            </div>
                        </div>
                        <div className="sa-images-innercontainer1-rightslides">
                            <div className="sa-images-innercontainer1-rightslides-slide1">

                            </div>
                        </div>
                    </div>
                    <div className="sa-images-innercontainer2">
                        <div className="sa-images-innercontainer2-row1">
                            <div className="sa-images-innercontainer2-row1-slide1">1</div>
                            <div className="sa-images-innercontainer2-row1-slide2">2</div>
                            <div className="sa-images-innercontainer2-row1-slide3">3</div>
                        </div>
                        <div className="sa-images-innercontainer2-row2">
                            <div className="sa-images-innercontainer2-row2-slide1">1</div>
                            <div className="sa-images-innercontainer2-row2-slide2">2</div>
                            <div className="sa-images-innercontainer2-row2-slide3">3</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default ShopAll