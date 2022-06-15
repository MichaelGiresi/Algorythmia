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
                <div>
                    <div>
                        <h6>PRICE</h6>
                        <h6>SIZE</h6>
                        <h6>INFO</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className='product-otherproducts-container'>
            <div className='product-otherproducts-info'></div>
            <div className='product-otherproducts-imagecontainer'>
                <div className='product-otherproducts-slide1-container'>1</div>
                <div className='product-otherproducts-slide1-container'>2</div>
                <div className='product-otherproducts-slide1-container'>3</div>
            </div>
        </div>
    </div>
  )
}

export default Product