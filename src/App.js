import NavBar from "./components/NavBar";
import Home from "./components/Home";
import StarsCanvas from "./components/canvas/Stars"
import About from "./components/About"
import Experience from "./components/Experience";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <section>
        <Home/>
        <StarsCanvas/>
      </section>
      <About/>
      <Experience/>
      
    </div>
  );
}

export default App;
