import React from "react";
import PropTypes from "prop-types";

import WOW from "wowjs";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
  
function Background()  {
	new WOW.WOW().init();


		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="top-container">
				
					<h1 id="white">
						Hello, I'm Saisamrit.
					</h1>
					<br />
					<div class= "typewriter">
					<h1 id="white">
						Welcome to my website!
					</h1 >
					</div>

					<Link to="main" className="navigation-item w-nav-link"> 
					<button class = "work-button"
						
						>
						View my work
					</button></Link>
				</div>
			</div>
		);
	
}

export default Background;