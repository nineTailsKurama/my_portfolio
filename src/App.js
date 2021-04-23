
import Footer from './footer'
import {showDiv} from './util'
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">

    
   <header>
      <a className = "skip" href="#projects">Skip to Main Content</a>
      <div className="navigation-wrap">
         <img src="images/logo_new-removebg.png" alt="logo" id = "logo"/>
         <h2> Portfolio</h2>
         <div className="menu-button w-nav-button">
            <img src="images/menu-icon_1menu-icon.png" width="22" id = "side" alt="icon" onClick={showDiv}/>
         </div>
      </div>
      <div id="menu-options" >
         <nav role="navigation" className="w-nav-menu">
            
               <Link to="about" className="navigation-item w-nav-link">
               <div className="link">
               About Me </div>
               </Link>
            
            <div className="link">
               <Link to="malaria" className="navigation-item w-nav-link">
               Malaria Work </Link>
            </div>
            <div className="link">
               <Link to="spanish" className="navigation-item w-nav-link">
               Spanish Flu </Link>
            </div>
         </nav>
      </div>
   </header>

   <main>
   
   <div id = "main-header-banner">

      
      <h1 > Hi, I'm Sai ! I am a Senior at the University of Michiga will be heading to grad school next. I love solving challenging problems that positively impact people and society. Through this website, I want to share some of the projects i have worked on. </h1>
   </div>
   <p className="scroll">Scroll down to see my work</p>

   <div className="section" >
      <h2 > Some of the projects i have worked on  </h2>
      <div id="projects">
         <div className="work-description">
         <Link  to="Malaria" className="navigation-item w-nav-link"> 
         <div className="work-image">
            <img alt="malaria net" src="images/malaria.jpeg"/>
            </div>
            </Link>
            <h3>Fighting Malaria by RBM Partnership</h3>
         </div>
         <div className="work-description">
            
            <Link  to="spanish" className="navigation-item w-nav-link"> 
            <div className="work-image">
            <img alt="spanish flu" src="images/570-spanish-flu-fort-porter.web.jpg"/>
            </div>
            </Link>
            <h3 >Pollution and Mortality: The Spanish Flu<br/></h3>
         </div>
      </div>
   </div>
   {/* 
</div>
*/}
   </main>

{/* </body> */}
 <Footer/>
 </div>

 
  );
}

export default App;
