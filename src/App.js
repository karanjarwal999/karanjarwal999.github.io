import Navbar from "./component/navbar";
import Home from "./component/home";
import Github from "./component/github";
import About from "./component/about";
import Skills from "./component/skills";
import Contact from "./component/contact";
import './style/app.css'
import Project from "./component/project";

function App() {
  return (
    <div id="app_div">
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Github/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App;
