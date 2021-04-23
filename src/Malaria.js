
import Footer from './footer'
import {showDiv} from './util'
import React from "react";
import {
  browserRouter as Router,
  Link
} from "react-router-dom";

function Malaria() {
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
         <div className="link">
            <Link to="about" className="navigation-item w-nav-link">
            About  Me</Link>
         </div>
         <div className="link">
            <Link to="main" className="navigation-item w-nav-link">
            Main </Link>
         </div>
         <div className="link">
            <Link to="spanish" className="navigation-item w-nav-link">
            Spanish Flu </Link>
         </div>
      </nav>
   </div>
</header>
   


  <main id= "main">
      <h1 className="heading-jumbo" id = "main">Fighting Malaria by RBM Partnership</h1>
      <div className="paragraph-light" ><em>Data Science<br/>‍<br/>This event was sponsored by The RBM Partnership to End Malaria , it is the largest global platform for coordinated action towards a world free from malaria.</em></div>


      <p className="paragraph-light cc-position-name">Malaria, a diabolical and deadly disease transmitted by the bites of infected mosquitoes, has been effectively banished from the developed world since the end of the World Health Organization’s Global Malaria Eradication Campaign in 1969. In Africa, however, the disease has remained a scourge, killing close to a million people – most of them children under five – each year. <br/><br/>As recently as 2006, the pediatric ward of the Mnazi Mmoja Hospital in Stone Town, Zanzibar, was overflowing with sick children. Each bed held two or three. Sometimes, when all the beds were full, children slept on the floor. The scene at the Mnazi Mmoja Hospital was much the same in thousands of hospitals and health clinics across sub-Saharan Africa.<br/><br/>In recent years, however, the international community has awoken from a long slumber, during which many millions perished, and begun to fight the disease in a determined way. Facing up to the challenge has required the mobilization of a vast network of organizations, made up of local, regional, national, and global actors in the for-profit, non-profit, and public spheres. <br/><br/>Local community groups working in tiny African villages, national malaria control programs (NMCPs) in malaria-endemic countries, national and international NGOs, faith-based organizations, foundations, individual philanthropists, research institutes, and huge multilateral bureaucracies like the United Nation’s Children’s Fund (UNICEF) and the World Health Organization (WHO) and the World Bank have been working with renewed focus and vigor to meet a goal that once seemed unthinkable – br/inging the number of malaria deaths in Africa down to zero by the end of 2015.<br/><br/>
      </p>

<div id= "img_container">

  <img src="images/parasite.jpg" loading="lazy" alt="parasite"/>

</div>


          <h2 className="position-name-text"><strong><em>We were tasked with the following case</em></strong></h2>

        <p  className="paragraph-light">Assume that donors have committed an extra $6 billion to spend on malaria reduction over the next 3 years. You are an Africa-based team of consultants. You have been hired by the RBM Partnership to End Malaria to make recommendations about spending these funds in the context of the new “high burden to high impact” malaria program. <br/><br/>How much would we allocate to global efforts by international organizations<br/><br/>Part of the “high burden to high impact” approach is “establishing the best global guidance, policies, and strategies for malaria endemic countries.” Describe at least two best practices that your chosen country could adopt.</p>



  <h1 className="heading-4">🇧🇫🇨🇲🇨🇩🇬🇭🇲🇱🇲🇿🇳🇪🇳🇬</h1>
 </main>
 <Footer/>
 </div>

 
  );
}

export default Malaria;
