import Navbar from './components/Navbar/Navbar'
import './App.css'
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experiance from './components/Experiance/Experiance';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
              <Navbar />
              <Intro />
              <Services/>
              <Experiance/>
              {/* <Works/> */}
              <Portfolio/>
              <Contact/>
              <Footer/>
    </div>
  );
}

export default App;
