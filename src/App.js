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
  

  const aboutPage = () => {

    const aboutDisplay = document.getElementById('about')
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

  useEffect(() => {
    console.log(about)
    

    if (about) {

    }

  })



 if(App) {

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
          <div className='nav'>
      <div className='logo-links-container'>
        <Link to="/" className="logo">A</Link>
        {/* <div className='logo'>A</div> */}
        <div className='links-container'>

          <Link to='products' className="shopall">SHOP ALL</Link>
          {/* <div className='shopall'>SHOP ALL</div> */}
          <div id="about"className='about' onClick={() => {aboutPage()}}>ABOUT</div>


          <div className='cart'>CART 0</div>
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
