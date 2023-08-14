import NavBar from "./components/NavBar";
import Home from "./components/Home";
import StarsCanvas from "./components/Stars"
import About from "./components/About"
import Experience from "./components/Experience";
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='relative z-0'>
          <Home />
          
      </div>
      <About/>
      <Experience/>
      <Technologies/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
