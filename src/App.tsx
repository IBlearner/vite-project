import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Toolbar from './components/Toolbar/Toolbar';
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Reviews from "./pages/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import { views } from "./constants";

function App() {
  const [page, setPage] = useState("Contact");

  const getPage = () => {
    switch (page) {
      case views.contact.routeName:
        return <Contact />
      case views.about.routeName:
        return <About />
      case views.reviews.routeName:
        return <Reviews />
      case views.home.routeName:
      default:
        return <Home />
    }
  }

  return (
    <div id="app">
      <Toolbar setPage={setPage}/>
        {getPage()}
      <Footer />
    </div>
  )
}

export default App;
