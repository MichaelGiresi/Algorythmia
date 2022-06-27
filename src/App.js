import Footer from "./home/components/Footer";
import Hero from "./home/components/Hero";
import Nav from "./home/components/Nav";
import Upcomming from "./home/components/Upcomming";
import Video from "./home/components/Video";
import nav from '../src/home/styles/nav/nav.css'
import HomeOutput from "./home/components/HomeOutput";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import ShopAll from "./ShopAll/components/ShopAll";
import Error from "./Error";
import About from "./About";
import Product from '../src/Product/components/Product'
import {useState, useEffect} from 'react'




function App() {
  const [about, setAbout] = useState(true)
  const [cart, setCart] = useState(true)
  const [cartCount, setCartCount] = useState(1)
  

  const aboutPage = () => {

    // const aboutDisplay = document.getElementById('about')
    const aboutPage = document.getElementById('about-page')

    if(about) {
      setAbout(false)
    } else {
      setAbout(true)
    }


    if(about) {
      aboutPage.classList.add('about-active')
    } else {
      aboutPage.classList.remove('about-active')
    }

  }

  const Cart = () => {
    const cartId = document.getElementById('cartId')
    const cartButton = document.getElementById('cart-button')
    
    
    if(cart) {
      setCart(false)
    } else {
      setCart(true)
    }
    
    if(cart) {
      cartId.classList.add('cart-active')
      console.log("true")
    } else {
      cartId.classList.remove('cart-active')
      console.log("False")
    }    

    cartButton.addEventListener('click', () => {
      cartId.classList.remove('cart-active'); 
      setCart(true)})
    
  }



  return (
    <Router>

      // About Page Drawer
    <div id="about-page" className="about-container" onClick={() => {aboutPage()}}>
      <div className="about-info-container">
        <h1>Algorythmia</h1>
        <h1>Algorythmia short description</h1>
        <h3>How does it work?</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h4>
      </div>
    </div>
    // Cart Drawer
    <div id="cartId" className="cart-container" > 
      <div className="cart-button-container">
        <button id="cart-button" className="cart-exit">X</button>
      </div>
      <div className="cart-product-info-container">
        <div className="cart-product-image">1</div>
        <div className="cart-product-info">
          <h3>Sheep be LED</h3>
          <h6>$12</h6>
          <button className="cart-product-remove-button" id="cart-product-remove">REMOVE</button>
        </div>
        <div className="cart-product-increment">
          <button id="cart-increment-remove" onClick={() => {setCartCount(cartCount - 1)}}>-</button>
          <div id="cart-increment">{cartCount}</div>
          <button id="cart-increment-add" onClick={() => {setCartCount(cartCount + 1)}}>+</button>
        </div>
      </div>
      <div className="cart-subtotal-container">
        <div className="cart-subtotal">Subtotal</div>
        <div className="cart-value">{`$${cartCount * 12}`}</div>
      </div>
      <div className="cart-promo-continue-container">
        <div className="cart-promo-title">Add Promo Code</div>
        <input className="cart-promo-input" placeholder="Enter your code"></input>
        <button className="cart-continue">Continue to Checkout</button>
      </div>
      <div className="cart-pay-choice-container">
        <h1>Or pay by</h1>
        <button className="cart-pay" id="cart-pay-paypal">Pay Pal</button>
        <button className="cart-pay" id="cart-pay-apple">Apple Pay</button>
        <button className="cart-pay" id="cart-pay-amazon">Amazon Pay</button>
      </div>


      </div>

    // Nav Structure
          <div className='nav'>
      <div className='logo-links-container'>
        <Link to="/" className="logo">A</Link>
        {/* <div className='logo'>A</div> */}
        <div className='links-container'>

          <Link to='products' className="shopall">SHOP ALL</Link>
          {/* <div className='shopall'>SHOP ALL</div> */}
          <div id="about"className='about' onClick={() => {aboutPage()}}>ABOUT</div>


          <div className='cart' onClick={() => {Cart()}}>CART 0</div>
        </div>
      </div>
      <div className='divider'></div>
    </div>
      <Routes>
        <Route path="/" element={<HomeOutput/>}/>
        <Route path="products" element={<ShopAll/>}  />
        <Route path="productpage" element={<Product/>} />
        <Route path="*" element = {<Error/>}/>
      </Routes>
      <div className="footer-container">
        <div>ALGORYTHMIA</div>
        <div className="footer-links-container">
          <div>TERMS OF SERVICE</div>
          <div>SHOP ALL</div>
          <div>ABOUT</div>
        </div>
      </div>
    </Router>

  );
}

export default App;
