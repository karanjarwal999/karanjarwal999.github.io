import Navbar from "./component/navbar";
import Home from "./component/home";
import AboutMe from "./component/aboutMe";
import Github from "./component/github";
import './style/app.css'

function App() {
  return (
    <div id="app_div">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Github/>
    </div>
  )
}

export default App;
