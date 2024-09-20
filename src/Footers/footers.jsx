import React from 'react'
import './footers.css'


export default function footers() {
  return (
   <div className='body-div'>
    <div className='footers'>
        <div className="footers-section-padding">
            <div className="footer-links">
                <div className='footer-images'></div> 
                <div className='footers-links-div'>
                 <h4>COMMUNITY</h4> 
                 <a href="">
                    <p>About Us</p>
                 </a>
                 <a href="">
                    <p>Tour Review</p>
                 </a>
                </div>
                <div className='footers-links-div'>
                 <h4>GETTING STARTED</h4> 
                 <a href="">
                    <p>Home</p>
                 </a>
                 <a href="">
                    <p>Destinations</p>
                 </a>
                 <a href="">
                    <p>Attractions</p>
                 </a>
                 <a href="">
                    <p>Pricing Details</p>
                 </a>
                 <a href="">
                    <p>Accomodations</p>
                 </a>
                </div>                
                <div className='footers-links-div'>
                 <h4>RESOURCES</h4> 
                 <a href="">
                    <p>Pinterest</p>
                 </a>
                 <a href="">
                    <p>Company Information</p>
                 </a>
                 <a href="">
                    <p>Contact Information</p>
                 </a>
                 <a href="">
                    <p>Missions and Values</p>
                 </a>
                 <a href="">
                    <p>Feedback Form</p>
                 </a>
                 <a href="">
                    <p>Pricing Discounts</p>
                 </a>
                </div>
       </div>
       <div className='footer-below'>
        <div className='footer-copyright'>
            <p>@{new Date(). getFullYear()} All rights reserved.
            </p>
        </div>
        <div className="footer-below-links">
            <a href=""><div><p>Terms of Use</p></div></a>
            <a href=""><div><p>Security</p></div></a>
            <a href=""><div><p>Privacy Policy</p></div></a>
            <a href=""><div><p>Sitemap</p></div></a>
        </div>
        <div className="footer-images"></div>
            </div>
          
        </div>
    </div>
    </div>
  )
}
