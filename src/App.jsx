import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Intro from "./components/Intro/Intro";
import Education from "./components/Education/Education";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <ContentWrapper>
      <Navbar />
      <Intro />
      <About />
      <Education />
      <Projects />
      <Contact />
    </ContentWrapper>
  );
}

export default App;
