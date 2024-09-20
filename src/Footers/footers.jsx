import React from 'react'
import './footers.css'
import Logo from '../Components/Logo'
import Images from '../assets/img'
import Text from '../Components/Text'
import Link from '../Components/Link'

export default function footers() {
  return (
   <>
   <div className='footer'>
      <div className='footer-text container'>
         <div className='footer-colums'>
            <Logo logoimg={Images.img1}/>
            <div className='foot-fourcolms'>
               <div className='first-colm'>
                  <Text texts='About' textstyle='footer-about'/>
                  <Link item1='About' item2='Submit on issue' item3='GitHub Repo' item4='Slack' lists='footer-firstlink'/>
               </div>
               <div className='sec-colm'>
                  <Text texts='Getting  Started' textstyle='footer-about'/>
                  <Link item1='Introduction' item2='Documentation' item3='Usage' item4='Globals' item5="Elements" item6='Collections' item7='Themes' lists='footer-firstlink'/>
               </div>
               <div className='thrd-colm'>
                  <Text texts='Resources' textstyle='footer-about'/>
                  <Link item1='API' item2='Form validations Product' item3='Visibility' item4='Accesibility' item5="Community" item6='Design Defined' item7='Marketplace' lists='footer-firstlink'/>
               </div>
            </div>
         </div>
      </div>
   </div>
   </>
  )
}
