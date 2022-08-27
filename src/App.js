import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Trainer from "./components/Trainers/Trainer";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Features />
      <Pricing />
      <Trainer />
      <Banner />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
