import React from 'react'
import Logo from '../Components/Logo'
import Images from '../assets/img'
import Text from '../Components/Text'
import Link from '../Components/Link'
import Icons from '../Components/Icons'
export default function footers() {
  return (
   <>
   <div className='footer'>
      <div className='footer-text container'>
         <div className='footer-colums'>
            <div className='foot-fourcolms'>
               <div className='first-colm'>
                  <Text texts='About' textstyle='footer-about'/>
                  <Link item1='About' item2='Submit on issue' item3='GitHub Repo' item4='Slack' lists='footer-firstlink'/>
               </div>
               <div className='sec-colm'>
                  <Text texts='Getting  Started' textstyle='footer-about'/>
                  <Link item1='Introduction' item2='Documentation' item3='Usage' item4='Globals' item5="Elements" item6='Collections' item7='Themes' lists='footer-firstlink'/>
               </div>
               <div className='third-colm'>
                  <Text texts='Resources' textstyle='footer-about'/>
                  <Link item1='API' item2='Form validations Product' item3='Visibility' item4='Accesibility' item5="Community" item6='Design Defined' item7='Marketplace' lists='footer-firstlink'/>
               </div>
               <div className='frth-colm'>
                  <Text texts='Social Media' textstyle='footer-social'/>
                  <Text texts='Follow us on social media to find out the latest updates on our progress'  textstyle='footer-social-media'/>
             <div className='social-icons'>
               <Icons icon='hugeicons:new-twitter'/>
                  <Icons icon='mingcute:facebook-line'/>
                  <Icons icon='ri:instagram-line'/>
             </div>
               </div>
            </div>
         </div>
         <div className='line'>
         <div className='hr'></div>
         </div>
         <div className='footer-fin-txt'>
            <div><Text texts= '@2024 Travel Smart. All rights reserved'/></div>
            <div className='footer-small-txt'>
            <Text texts='Privacy Policy' />
            <Text texts='Security'/>
            <Text texts='Sitemap'/>
            </div>
            <Logo logosec='footer-logo' logoimg={Images.img1}/>
         </div>
      </div>
   </div>
   </>
  )
}
