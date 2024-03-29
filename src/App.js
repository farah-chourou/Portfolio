import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Skills from "./components/Skills";
import "react-slideshow-image/dist/styles.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Services />
      <Work />

      <Skills />
      <Footer />
    </div>
  );
}

export default App;
