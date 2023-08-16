import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About"
import Experience from "./components/Experience";
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import ResumeButton from "./components/ResumeButton";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ResumeButton/>
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
