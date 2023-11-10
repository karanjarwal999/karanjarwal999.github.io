import Navbar from "./component/navbar";
import Home from "./component/home";
import Github from "./component/github";
import About from "./component/about";
import Skills from "./component/skills";
import Contact from "./component/contact";
import './style/app.css'
import Project from "./component/project";
import { useEffect, useRef, useState } from "react";

function App() {

  const projectRef=useRef()
  let [flag,setflag]=useState(false)
  
  // to give allert on user reach project section
  useEffect(() => {
    const target = projectRef.current

    let observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setflag(true)
        setTimeout(() => {
          observer.unobserve(target)
          setflag(false)
        }, 2000);
      }
    });
    if (target) {
      observer.observe(target);
    }
  }, []);


  return (
    <div id="app_div" style={{backgroundColor:'black'}}>
      <Navbar/>
      <Home/>
      <About/>
      <Project flag={flag}/>
      <Github projectRef={projectRef}/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App;
