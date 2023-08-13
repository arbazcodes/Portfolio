import NavBar from "./components/NavBar";
import Home from "./components/Home";
import StarsCanvas from "./components/Stars"
import About from "./components/About"
import Experience from "./components/Experience";
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='relative z-0'>
          <Home />
          <StarsCanvas />
      </div>
      <About/>
      <Experience/>
      <Technologies/>
      <Projects/>
    </div>
  );
}

export default App;
