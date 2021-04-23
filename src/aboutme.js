
import Footer from './footer'
import {showDiv} from './util'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function About() {
  return (
    <div className="App">
  <header id= "header">
    <a class = "skip" href="#main">Skip to Main Content</a>
    <div className="navigation-wrap">
    <img src="images/logo_new-removebg.png" alt="logo" id = "logo"/>
    <h2> About Me!</h2>


      <div className="menu-button w-nav-button"><img src="images/menu-icon_1menu-icon.png" width="22" id = "side" alt="icon" onClick={showDiv}/></div>
      </div>
      <div id="menu-options" >
        <nav role="navigation" className="w-nav-menu">
        <div class="link">
          <Link to="main" className="navigation-item w-nav-link">Main </Link></div><div class="link">
          <Link to="malaria" className="navigation-item w-nav-link">Malaria Work </Link></div><div class="link">
          <Link to="spanish" className="navigation-item w-nav-link">Spanish Flu </Link></div>
        </nav>
    </div>

</header>
<main>
  <div id = "main">
    <div >
      <div className="w-layout-grid about-intro-grid">

          <h1 className="hi-there-heading">I&#x27;m Sai Sur</h1>
          <p className="paragraph-light"><br/><br/>I’m a senior in the University of Michigan studying Data Science and minor in Math. Moving to DC for grad school next.  I love solving hard problems and making friends all around the globe. <br/><br/>As a future engineer, I enjoy bridging the gap between real world and computers — combining my technical knowledge with real life experience. My goal is to always build applications that are scalable and think intelligently. <br/>‍<br/>‍<strong>When I&#x27;m not in front of a computer screen</strong>, I'm probably reading science fiction, or discussing geo-politics and learning to cook new food.</p>
        </div>
        <div className="mypic">
          <img src="images/si.jpeg"  alt="my picture" />
        </div>
    </div>
  </div>
  <div >
    <div >
      <div className="w-layout-grid skills-grid">
          <h2>Cities</h2>
          <p className="paragraph-light">Growing up in six different cities is a privilege it opens your eyes to the magic of human networks. Each city taught me and pushed me to be better</p>
        <div id="city-container" >
            <div className="city-name">Ann Arbor<strong> 🇺🇸</strong></div>
            <div className="city-name">Seattle <strong>🇺🇸</strong> </div>
            <div className="city-name">Doha <strong>🇶🇦</strong></div>
            <div className="city-name">Hyderabad <strong>🇮🇳</strong></div>
            <div className="city-name">Chennai <strong>🇮🇳</strong></div>
            <div className="city-name">Baripada <strong>🇮🇳</strong></div>
          </div>
      </div>
      <div className="books">
        <div >
          <h2>Reading</h2>
          <div className="paragraph-light cc-position-name">Books are love, Books are life. Here are my favorite books of all time </div>
        </div>

        <div id = "listbooks">
          <div className="book-container">
            <div className="speaking-text">Home Deus</div>
            <p>It describes how us humanity is likely to make a significant attempt to gain happiness, immortality, and God-like powers.</p>
            <img src="images/39704901._SY475_.jpg" loading="lazy" alt="Homo Deus" className="image"/>
          </div>
          <div className="book-container">
            <div className="speaking-text">Zero to One </div>
            <p>It taught me that  the process of creating something radically new and taking it to the next step </p><img src="images/91AWmg7WVKL.jpg" loading="lazy"  alt="zerotoone pic"/>
          </div>
          <div className="book-container">
            <div className="speaking-text">Black Swan</div>
            <p>Black swan is a book about extreme impact of rare and unpredictable outlier events. The Corona-virus epidemic reminded me of this book</p><img src="images/41fAGV3AE-L.jpg" loading="lazy" alt="blackswan pic"/>
          </div>
          <div className="book-container">
            <div className="speaking-text">Accidental Prime Minister </div>
            <p>Accidental Prime Minister is a book about ex PM Manmohan Singh and the kind of control he had over the cabinet and the country</p><img src="images/917AA4p-a0L.jpg" loading="lazy"  alt=""/>
          </div>
          <div className="book-container">
            <div className="speaking-text">Plato Republic </div>
            <p>&quot;The Republic is a Socratic dialogue, authored by Plato around 375 BC, concerning justice, the order and character of the just city-state, and the just man.&quot; - Wiki</p><img src="images/9780140455113_p0_v1_s1200x630.jpg" loading="lazy" alt=""/>
          </div>
          <div className="book-container">
            <div className="speaking-text">Antifragile</div>
            <p>I loved the word antifragile as it clearly expressed the meaning of the phrase &quot;what doesn&#x27;t kill you makes you stronger&quot;</p><img src="images/71PB16riDXL.jpg" loading="lazy"  alt=""/>
          </div>
        </div>
      </div>
    </div>
    <div >
      <div className="social-media-heading">
        <h3>Some other books I like </h3>
      </div>
    </div>
  </div>
  <div >
    <div className="books" id = "other-books">
      <img src="images/71bPzpxKDXL.jpg"   alt=""/>
      <img src="images/51GtTMTpNmL._SX331_BO1204203200_.jpg"  alt=""/>
      <img src="images/51oXKWrcYYL.jpg" alt=""/>
      <img src="images/715SWZzcslL.jpg" alt=""/></div>
  </div>
</main>
 <Footer/>
 </div>

 
  );
}

export default About;
