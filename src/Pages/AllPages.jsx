import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./header";
import Landing from "./landing";
import Projects from "./Projects";
import Skills from './Skills';
import Technologies from "./Technologies";
import Scroller from "../components/scroller";
import Settings from "../components/Settings";

function AllPages() {
  document.title = "H Programmer";
  return <>
    <Settings />
    <Scroller />
    <Header />
    <Landing />
    <Skills />
    <About />
    <Technologies />
    <Projects />
    <Contact />
    <Footer />
  </>
}

export default AllPages;