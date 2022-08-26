import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Features from "./components/Features/Features";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Features />
    </div>
  );
}

export default App;
