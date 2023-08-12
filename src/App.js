import NavBar from "./components/NavBar";
import Home from "./components/Home";
import StarsCanvas from "./components/canvas/Stars"
import About from "./components/About"
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";


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
      <Technologies/>
      
    </div>
  );
}

export default App;
