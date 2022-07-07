
import './App.css';

import "swiper/css/bundle";



import AppBbar from './components/appbar/AppBar';
import Home from './components/home/Home';
import Service from './components/services/Service';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
     <AppBbar/>
     <Home/>
     <About/>
     <Skills/>
     <Service/>

     {/*   */}
     <Footer/>
   
     
    </>



      
  );
}

export default App;
