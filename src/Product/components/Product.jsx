import React from 'react'
import product from '../styles/product.css'

const Product = () => {
  return (
    <div className='product'>
        <div className='product-hero-container'>
            <div className='product-image-container'>
                <div>1</div>
            </div>
            <div className='product-hero-info'>
                <h6>SHOP ALL / CATEGORY NAME</h6>
                <h1>Dungeons Sweatshirt</h1>
                <div className='product-hero-productinfo-container'>
                    <div className='product-hero-price-container'>
                        <h6>PRICE</h6>
                        <h5>$30USD</h5>
                    </div>
                    <div className='product-hero-size-container'>
                        <h6>SIZE</h6>
                        <div className='product-size-selector-container'>
                            <h4>XS</h4><h4>S</h4><h4>M</h4><h4>L</h4><h4>XL</h4>
                        </div>
                    </div>
                    <div className='product-hero-info-container'>
                        <h6>INFO</h6>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                    </div>
                    <div className='product-hero-button-container'>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='product-otherproducts-container'>
            <div className='product-otherproducts-info'>
                <p>At vers et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            </div>
            <div className='product-otherproducts-imagecontainer'>
                <div className='product-otherproducts-slide1-container'>
                    <div className="product-otherproduct1-image"></div>
                    <div className='product-otherproduct1-info'>
                        <h3>Dungeons Sweatshirt</h3>
                        <h3>$30</h3>
                    </div>
                </div>
                <div className='product-otherproducts-slide1-container'>
                <div className="product-otherproduct1-image"></div>
                    <div className='product-otherproduct1-info'>
                        <h3>Dungeons Sweatshirt</h3>
                        <h3>$30</h3>
                    </div> 
                </div>
                <div className='product-otherproducts-slide1-container'>
                <div className="product-otherproduct1-image"></div>
                    <div className='product-otherproduct1-info'>
                        <h3>Dungeons Sweatshirt</h3>
                        <h3>$30</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product