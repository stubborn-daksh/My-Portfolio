import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Project from "./pages/Projects/Project";
import Techstack from "./pages/TechStack/Techstack";
import Workexp from "./pages/WorkExp/Workexp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from 'react-reveal/Tada';
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        {/* <MobileNav /> */}
        <Layout />
        <div className="container">
        <About />
        <Education/>
        <Techstack />
        <Project/>
        <Workexp/>
        <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
          <h4 className="text-center">Made By ❤ Daksh Kesarwani &copy; 2023</h4>
          </Tada>
        </div> 
      </div>
        <ScrollToTop smooth color="#f29f67" style={{backgroundColor:'#1e1e3c', borderRadius:'80px'}} />
    </>
  );
}

export default App;
