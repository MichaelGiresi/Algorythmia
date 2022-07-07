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
import cart from './cart/style/cart.css'
import sheepimg1 from './assets/FollowTheLeaderPoster.jpeg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import can from './assets/can.png'
import AlgoLogo from './assets/AlgorythmiaA.svg'



function App() {
  
  const [about, setAbout] = useState(false)
  const [cart, setCart] = useState(false)
  const [cartCount, setCartCount] = useState(1)
  if(App) {
    
    
    const aboutPage = () => {
      const aboutPage = document.getElementById('about-page')
      
      if(about) {
        setAbout(false)
        aboutPage.classList.toggle('show') 
        console.log(about)
        document.body.style.position = ''
        
        // document.body.style.inset = '0px'
        
      } else {
        setAbout(true)
        aboutPage.classList.toggle('show') 
        document.body.style.position = 'fixed'
        document.body.style.right = '0'
        document.body.style.top = '0'
        document.body.style.bottom = '0'
        document.body.style.left= '0'
        document.body.style.margin = 'auto'
        console.log(about)
      }
      
    }
    // The parent div for the cart has an ID of cartId, and has a classname of cart-container
    
    // 1. Toggling another classlist to handle display none/flex
    // 2. Transition using opacity instead of right.
    const Cart = () => {
      const cartId = document.getElementById('cartId')
      const cartButton = document.getElementById('cart-button')
      
      if(cart) {
        setCart(false) 
        cartId.classList.toggle('open')
        console.log(cart)
      } else {
        setCart(true) 
        cartId.classList.toggle('open')
        console.log(cart)
      }
    }
    
    return (
      
      
      
      <Router>

      
    <div id="about-page" className="about-container" onClick={() => {aboutPage()}}>
      <div className="about-info-container">
        <h1>Algorythmia</h1>
        <h1>Algorythmia short description</h1>
        <h3>How does it work?</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h4>
      </div>
    </div>
   
    <div id="cartId" className="cart-container" > 
      <div className="cart-button-container">
        <button id="cart-button" className="cart-exit" onClick={() => {Cart()}}>X</button>
      </div>
      <div className="cart-product-info-container">
        <div>

        <img className="cart-product-image" src={sheepimg1}/>
        <div className="cart-product-increment">
          <button id="cart-increment-remove" onClick={() => {setCartCount(cartCount - 1)}}>{cartCount < 2? <img  src={can} width={'15px'} height={'15px'}/> : "-" }</button>
          <div id="cart-increment">{cartCount}</div>
          <button id="cart-increment-add" onClick={() => {setCartCount(cartCount + 1)}}>+</button>
        </div>
        </div>
        <div className="cart-product-info-increment-wrapper">
        <div className="cart-product-info">
          <h3>Follow The Leader</h3>
          <h6>$12</h6>
          <h6>In Stock</h6>
          <button className="cart-product-remove-button" id="cart-product-remove">REMOVE</button>
        </div>
        <div className="cart-product-increment-laptop">
          <button id="cart-increment-remove" onClick={() => {setCartCount(cartCount - 1)}}>-</button>
          <div id="cart-increment">{cartCount}</div>
          <button id="cart-increment-add" onClick={() => {setCartCount(cartCount + 1)}}>+</button>
        </div>
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
      <div className="footer-container-mobile">
        <div>ALGORYTHMIA</div>
        <div className="footer-links-container-mobile">
          <div>TERMS OF SERVICE</div>
          <div>SHOP ALL</div>
          <div>ABOUT</div>
        </div>
      </div>
    </Router>
  );
} else {
  <h1>Loading...</h1>
}
}

export default App;
