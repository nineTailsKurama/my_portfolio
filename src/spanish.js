
import Footer from './footer'
import {showDiv} from './util'
import React from "react";
import {
  browserRouter as Router,
  Link
} from "react-router-dom";

function spanish() {
  return (
    <div className="App">
   <header>
      <a className = "skip" href="#main">Skip to Main Content</a>
      <div className="navigation-wrap">
         <img src="images/logo_new-removebg.png" alt="logo" id = "logo"/>
         <h2> Malaria Work</h2>
         <div className="menu-button w-nav-button">
            <img src="images/menu-icon_1menu-icon.png" width="22" id = "side" alt="icon" onClick={showDiv}/>
         </div>
      </div>
      <div id="menu-options" >

      <nav role="navigation" className="navigation-item w-nav-menu">
            <Link to="main" className="navigation-item w-nav-link">Main</Link>
            <Link to="about" className="navigation-item w-nav-link">About</Link>
            <Link to="malaria" className="navigation-item w-nav-link">Malaria Work</Link>
         </nav>



         
      </div>
   </header>
   

   <main id="main">
         <div class="container">
            <div class="w-layout-grid project-overview-grid">
               <div id="w-node-_0befc76b-828c-2822-f9fa-f2c6de040bbf-2382e81f">
                  <h1 class="heading-jumbo">Pollution and Mortality: The Spanish Flu</h1>
               </div>
               <div id="content_paras">
                  <img src="images/570-spanish-flu-fort-porter.web.jpg" loading="lazy" alt="Spanish Flu picture" id = "img_spain"/>
                  <p>The 1918 Influenza Pandemic was one of the largest pandemics mankind has ever faced. With recent events like outbreak of Covid-19, It is crucial to study and analyze large scale pandemics to better solve the current crisis. Large-scale outbreaks of infectious disease that greatly increase morbidity and mortality over a wide geographic area and cause significant economic, social, and political disruption. This disruption is very different for different groups and regions. This paper will try to find a way to see if this disruption to human life using the Spanish Flu is due to adverse living conditions. We will also prove higher density of people in the environments help viruses to spread faster.
                  </p>
                  <h2 class="position-name-text"><strong>Introduction</strong></h2>
                  <p >
                    

                    Epidemics have been a major catastrophe through millennia with large epidemics such as the Black Death wiping out as much as 40% of the population. The largest plague in recent memory is the Spanish flu outbreak of the 1918s. The virus infected an estimated 500 million people worldwide, one-third of the population. It killed at least 50 million people, more than all twentieth-century wars (Crosb 1989).<br/>‍<br/>Infectious diseases are an important cause of human death. The study of the spread and development of these infectious diseases helps us be resilient and better prepare for the current Covid-19 virus.  A study of the spread causes, spread routes, processes, and epidemic laws of infectious diseases is the main method for effective prevention, control, and elimination of infectious diseases like Covid-19. The study of infectious diseases is based on the theory and method of infectious disease dynamics (Hans Modeling infectious disease 2015). The idea behind infectious disease dynamics is to build a  mathematical model that can reflect the spread process, spread law, and trend of infectious diseases. Its advantage is that, according to the characteristics of infectious diseases, the model of infectious diseases if reasonably assumed, the appropriate parameters are set, and the appropriate variables are selected. Then, we can easily understand the dynamic characteristics of infectious diseases.One such parameter of controlling spread which people neglect is the living conditions of people. This is especially harsh for people living in developing countries where people play rough shoot with their environment. This degraded environment can be very troublesome to its citizens in times of crisis. Having a model to better able to predict regions with cases of high coronavirus can help people save some of the precise time required in better allocating resources.
                  </p>
                  <p >
                     Through this paper, I will be trying to explore whether my belief that high pollution areas will have higher causality rates even accounting for higher pollution. To see if this true, This paper will try to delve into the following parts which are Data, Method, Simulations, Analysis, and discussions. These parts will build upon each other to make a model that works on the prediction of deaths in regions with heavy coal production vs renewable. Through understanding the model, we will try to see the relationships between different condition people live ans their impact of the virus.In the Data section, we will be discussing more into important variables and distribution of people. We will be breaking the data into towns with higher coal production and higher renewable energy. This will allow us to help better decisions based upon the variables in place.
                  </p>
                  <h2 class="position-name-text"><strong>Data</strong></h2>
                  <p> In this blog, we will mostly use the data provided in the Pollution, Infectious Disease, and Mortality paper by Karen Clay & Joshua Lewis & Edson Severini. The data here broken down into five main categories. We will be taking a deeper look into three main categories to better understand the data. These are all the characteristics of the data.</p>
                  <p>Geographic and Time: The geographic characteristics here are the location of the cities, their states, towns, and location. Time is broadly divided which year most of the data was collected. </p>
                  <p> Infant and all-age mortality:  This is how many infants and all-age people died due to Spanish flu reasons Coal and hydro capacity.This is the capacity of coal and hydropower sources of energy nearby.</p>
                  <p> Baseline population and socioeconomic characteristics: These are economic characteristics of people in the area.  Other determinants of pandemic severity  These are factors linked to pandemics and its rise post WW1</p>
                  <h2 class="position-name-text"><strong class="bold-text">Geographic and Time Characteristics </strong></h2>
                  <p>Spanish flu was spread all across the US, with the devastating loss of life everywhere. Due to the constraints of data collection in the early 20th century combined with pre-computer data collection. Most of the data collected is not that granular. Large states like California, Texas, and Florida aren&#x27;t represented at all. This skews the data to represent the Upper North East and Midwest more. Leading to over-representation of the participating cities. <br/>Most of the data is not from the same time, as most of the data collected at that period were sparse and loosely monitored. But since the data is mostly within five years from each other it will give us a rough idea about our statistics</p>
                  <h2 class="position-name-text"><strong class="bold-text">Infant Mortality</strong></h2>
                  <p>In our data, we will be playing a close indication of infant mortality. Infant mortality is widely used in studies of pollution since infants are especially vulnerable to environmental conditions and current air pollution concentrations are a better reflection of lifetime exposure (Currie et al. 2014).</p>
                  <h2 class="position-name-text"><strong class="bold-text">Discussion</strong></h2>
                  <p>Although, we started this study thinking that pollution adversely effects healthcare outcomes substantially, through the study, i have found the contrary. This can be for a variety of factors but the largest factors are the over representation of coal powered cities, close location of all the hydro power plants and other factors beyond our variables. New studies by Xiao Wu, Rachel C. Nethery at Harvard have shown that there is a really positive correlation between air quality and healthcare outcomes even adjusting for healthcare facilities. The study mentioned &quot; increase of only 1 g/m3 in PM2.5 is associated with a 15% increase in the COVID-19 death rate, 95% confidence interval (CI) (5%, 25%).&quot; The study used PM2.5 instead of checking for sources of pollution. This is really important as most of the pollution caused is due to vehicular emissions. The best way to expand this study is to link this model with a Suspected- Infected- Recovered(SIR) model. SIR models are widely used in the field of epidemiology to model these complex relationships of virus spread. Having a simple linear model might have higher bias for not being able to model the underlying relationship of data very well. Looking at larger varieties of cities across the US will also be helpful. With this we can see that the real difference between use of energy sources and their impact on surrounding areas.<br/>
                  </p>
               </div>
            </div>
         </div>
      </main>
 <Footer/>
 </div>

 
  );
}

export default spanish;
