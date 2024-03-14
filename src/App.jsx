import "./App.css";
import NaviBar from "./components/NaviBar";
import WithSplashScreen from "./components/WithSplashScreen";
import Home from "./components/Home";

import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import AccessInfo from "./components/AccessInfo";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <WithSplashScreen />
      <NaviBar />
      <Home />
      <AboutUs />
      <Menu />
      <AccessInfo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
