import Navbar from "./Components/Components/Navbar";
import AboutMe from "./Components/Components/AboutMe";
import Skills from "./Components/Components/Skills";
import HTML from "./Components/Pictures/html-logo.png";
import jQuery from "./Components/Pictures/jquery-logo.png";
import JavaScript from "./Components/Pictures/js-logo.png";
import CSS from "./Components/Pictures/css-logo.png";
import Bootstrap from "./Components/Pictures/bootstrap-logo.png";
import React from "./Components/Pictures/react-logo.png";
import mongodb from "./Components/Pictures/mongodb-logo.png";
import nodejs from "./Components/Pictures/node-js-logo.png";
import mysql from "./Components/Pictures/mysql-logo.png";
// import Projects from "./Components/Components/Projects";
import Contact from "./Components/Components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
      <div className="background-image">
        <Navbar />
        <AboutMe />
      </div>
      <div>
        <Skills />
        <div className="image-container">
          <h1>Technical Skills:</h1>
          <div>
          <img id="logo" src={HTML} onClick={(e) => {e.preventDefault(); window.location.href="https://www.w3schools.com/html/html_intro.asp"}}></img>
          <img id="logo" src={CSS} onClick={(e) => {e.preventDefault(); window.location.href="https://www.w3schools.com/css/"}}></img>
          <img id="logo" src={JavaScript} onClick={(e) => {e.preventDefault(); window.location.href="https://www.javascript.com/"}}></img>
          <img id="logo" src={Bootstrap} onClick={(e) => {e.preventDefault(); window.location.href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"}}></img>
          <img id="logo" src={jQuery} onClick={(e) => {e.preventDefault(); window.location.href="https://api.jquery.com/"}}></img>
          <img id="logo" src={mongodb} onClick={(e) => {e.preventDefault(); window.location.href="https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_united_states_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624338&gclid=CjwKCAjwgISIBhBfEiwALE19SZohn1usDbhz3JgpLcGbjlcCUne59y1t4Q9-LuaIHoPRjVWwLFKRrBoCo-MQAvD_BwE"}}></img>
          <img id="logo" src={nodejs} onClick={(e) => {e.preventDefault(); window.location.href="https://nodejs.org/en/docs/"}}></img>
          <img id="logo" src={mysql} onClick={(e) => {e.preventDefault(); window.location.href="https://www.mysql.com/"}}></img>
          <img id="logo" src={React} onClick={(e) => {e.preventDefault(); window.location.href="https://reactjs.org/"}}></img>
          </div>
          <h2>Try clicking the logos </h2>
        </div>
        {/* <Projects /> */}
        <Contact />
      </div>
    </>
  );
}

export default App;
