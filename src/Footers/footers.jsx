import React from 'react'
import './footers.css'
import Logo from '../Components/Logo'
import Images from '../assets/img'
import Text from '../Components/Text'
import Link from '../Components/Link'

export default function footers() {
  return (
   <>
   <div className='footer' style={{backgroundColor: "pink"}}>
      <div className='footer-text container' style={{backgroundColor: "brown"}}>
         <div className='footer-colums' style={{backgroundColor: "green"}}>
            <Logo logoimg={Images.img1}/>
            <div className='foot-fourcolms' style={{backgroundColor: "blue"}}>
               <div className='first-colm' style={{backgroundColor: "saddlebrown"}}>
                  <Text texts='About' textstyle='footer-about'/>
                  <Link item1='about' item2='Submit on issue' item3='GitHub Repo' item4='Slack' lists='footer-firstlink'/>
               </div>
               <div className='sec-colm' style={{backgroundColor: "saddlebrown"}}>
                  <Text texts='About' textstyle='footer-about'/>
                  <Link item1='Documentaion' item2='Submit on issue' item3='GitHub Repo' item4='Slack' item5="" lists='footer-firstlink'/>
               </div>
            </div>
         </div>
      </div>
   </div>
   </>
  )
}
