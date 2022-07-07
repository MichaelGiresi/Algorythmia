import React from 'react'
import shopall from '../styles/allProducts/shopall.css'
import product1 from '../../assets/Brokengrid01.jpeg'
import product2 from '../../assets/FollowTheLeaderPoster.jpeg'
import product3 from '../../assets/FollowTheLeaderPoster02.jpeg'
import product4 from '../../assets/FollowTheLeaderPoster03.jpeg'
import product5 from '../../assets/Wethreeheads01.jpeg'
import product6 from '../../assets/algorythmia01.jpeg'

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
                                <div className='sa-imagecontainer-slide1'><img style={{borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}} src={product1} width='100%' height= '100%'/></div>
                                <div className='sa-slide1-info'>
                                    <div className='sa-slide1-title'>Dungeons Sweatshirt</div>
                                    <div className='sa-slide1-price'>$30</div>
                                </div>
                            </div>
                            <div className="sa-images-innercontainer1-slide2">
                                <div className='sa-imagecontainer-slide2'><img style={{borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}} src={product2} width='100%' height= '100%'/></div>
                                <div className="sa-slide2-info">
                                    <div className="sa-slide2-title">Dungeons Sweatshirt</div>
                                    <div className="sa-slide2-price">$30</div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="sa-images-innercontainer1-rightslides">
                            <div className="sa-images-innercontainer1-rightslides-slide1">
                            <div className='sa-imagecontainer-images-rightslides-slide1'><img style={{borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}} src={product6} width="100%"/></div>
                                <div className="sa-slide1-rightslides-info">
                                    <div className="sa-slide1-rightslides-title">Dungeons Sweatshirt</div>
                                    <div className="sa-slide1-rightslides-price">$30</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sa-images-innercontainer2">
                        <div className="sa-images-innercontainer2-row1">
                            <div className="sa-images-innercontainer2-row1-slide1">
                            <div className='sa-imagecontainer2-row1-slide1-image'><img style={{borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}} src={product3} width='100%' height= '100%'/></div>
                                <div className="sa-row1-slide1-info">
                                    <div className="sa-row1-slide1-title">Dungeons Sweatshirt</div>
                                    <div className="sa-row1-slide1-price">$30</div>
                                </div>
                            </div>
                            <div className="sa-images-innercontainer2-row1-slide2">
                            <div className='sa-imagecontainer2-row1-slide2-image'><img style={{borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}} src={product4} width='100%' height= '100%'/></div>
                                <div className="sa-row1-slide2-info">
                                    <div className="sa-row1-slide2-title">Dungeons Sweatshirt</div>
                                    <div className="sa-row1-slide2-price">$30</div>
                                </div>
                            </div>
                            <div className="sa-images-innercontainer2-row1-slide3">
                            <div className='sa-imagecontainer2-row1-slide3-image'><img style={{borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}} src={product3} width='100%' height= '100%'/></div>
                                <div className="sa-row1-slide3-info">
                                    <div className="sa-row1-slide3-title">Dungeons Sweatshirt</div>
                                    <div className="sa-row1-slide3-price">$30</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="sa-images-innercontainer2-row2">
                            <div className="sa-images-innercontainer2-row2-slide1">
                            <div className='sa-imagecontainer2-row2-slide1-image'>2</div>
                                <div className="sa-row2-slide1-info">
                                    <div className="sa-row2-slide1-title">Dungeons Sweatshirt</div>
                                    <div className="sa-row2-slide1-price">$30</div>
                                </div>
                            </div>
                            <div className="sa-images-innercontainer2-row2-slide2">
                            <div className='sa-imagecontainer2-row2-slide2-image'>2</div>
                                <div className="sa-row2-slide2-info">
                                    <div className="sa-row2-slide2-title">Dungeons Sweatshirt</div>
                                    <div className="sa-row2-slide2-price">$30</div>
                                </div>
                            </div>
                            <div className="sa-images-innercontainer2-row2-slide3">
                            <div className='sa-imagecontainer2-row2-slide3-image'>2</div>
                                <div className="sa-row2-slide3-info">
                                    <div className="sa-row2-slide3-title">Dungeons Sweatshirt</div>
                                    <div className="sa-row2-slide3-price">$30</div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
  )
}

export default ShopAll