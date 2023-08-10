import NavBar from "./components/NavBar";
import Home from "./components/Home";
import StarsCanvas from "./components/canvas/Stars"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <StarsCanvas/>
    </div>
  );
}

export default App;
