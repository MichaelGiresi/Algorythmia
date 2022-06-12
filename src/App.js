import Footer from "./home/components/Footer";
import Hero from "./home/components/Hero";
import Nav from "./home/components/Nav";
import Upcomming from "./home/components/Upcomming";
import Video from "./home/components/Video";
import nav from '../src/home/styles/nav/nav.css'


function App() {
  return (
    <div className="app">
      <Nav/>
      <Hero/>
      <Video/>
      <Upcomming/>
      <Footer/>
    </div>
  );
}

export default App;
