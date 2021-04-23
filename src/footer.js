import React from "react";

function Footer() {
  return (
    <div>
        <footer>
      <div className="section cc-contact">
   <div className="container">
      <div className="contact">
         <div className="contact-headline">
            <h3>Want to get in touch?<br/>Drop me a line!</h3>
            <p className="paragraph-light">Please send an Email to saisam@umich.edu</p>
         </div>
         {/* 
         <div className="contact-form-wrap">
            <div className="w-form">
               <!-- <form data-name="Email Form" className="contact-form">
                  </form> -->
               <!-- <input type="submit" value="Submit" data-wait="Please wait..." className="button"> -->
            </div>
         </div>
         */}
      </div>
   </div>
</div>
<div className="footer-links">
   <a href="https://www.facebook.com/saitheintellectual/">
   <img alt="facebook" src="images/fb.png" className="footer-img"/>
   </a>
   <a href="https://twitter.com/masiasrus">
   <img alt="twitter" src="images/23931.png" className="footer-img"/>
   </a>
   <a href="https://www.instagram.com/saisam_sur/" >
   <img alt="insta" src="images/insta.png" className="footer-img"/>
   </a>
</div>
</footer>
    </div>
  );
}

export default Footer;