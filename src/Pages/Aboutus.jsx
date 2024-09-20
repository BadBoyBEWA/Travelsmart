import React from 'react'
import Text from '../Components/Text'
import Airplane from '../Components/Airplane'
// import Logo from '../Components/Logo'
// import Links from '../Components/Links'
import Images from '../assets/img'
import Link from '../Components/Link'
import Buttons from '../Components/Buttons'
// import Home from '../Components/Home'

export default function Aboutus() {
  return (
    <>
    <section className='bgabout'>
      <div className='container'>
        <Text texts='ABOUT US' textstyle='bgabouttx'/>
      </div>
    </section>

    <section className='why-sec'>
      <div className='container'>
        <div className='whytx'>
          <Text texts='Why Travel Smart?' textstyle='why'/>
        </div>
        <div className='why-pictx'>
          <div className='whypic'>
          <Airplane airimg={Images.img13}/>
          </div>
          <div className='choose'>
            <Text texts='Why Choose Travel Smart' textstyle='why-choose'/>
            <Text textstyle='why-choosetx' texts='We know that travel planning can be overwhelming, which is why we offer a single platform for all your travel needs. `Whether you"re looking for attractions, hotels, dining options, or local culture, Travel Smart brings everything to your fingertips.'/>
            <Link lists='chooselink' item1='Comprehensive destination guides.' item2='Compare flights, trains, buses, and car rentals.' item3='Access to handpicked hotels, tours, and dining recommendations.' item4='Save time and money by finding everything in one place.'/>
          </div>
        </div>

        <div className='how-sec'>
          <Text texts='How It Works' textstyle='howhead'/>
          <Text textstyle='howtx' texts='We’ve made travel planning easier than ever. Here’s how you can use Travel Smart to plan your next trip'/>
        </div>
        <div className='works'>
          <div className='howworks'>
            <Link icon='mdi:plane' lists='chooselink2' step1='Step1: ' step2='Step2: ' step3='Step3: ' step4='Step4: ' steps='steps' item1='Search for your destination and explore in-depth guides on top attractions, culture, and dining.' item2='Compare and book flights, trains, buses, or car rentals for the best travel options.' item3='Discover the best hotels and unique stays that match your travel style and budget.' item4='Find guided tours or self-planned excursions for a personalized experience'/>
          </div>
          <div className='howpic'>
          <Airplane airimg={Images.img14}/>
          </div>
        </div>

        <div className='promise-sec'>
          <Text texts='Our Promise' textstyle='promisetx'/>
          <Text textstyle='protx' texts='At Travel Smart, our mission is simple: to make your travel planning seamless, stress-free, and cost-effective. We focus on providing you with tailored recommendations so that every trip feels uniquely yours. Whether it’s a business trip or your dream vacation, we’re here to help you make the most of your journey.'/>
        </div>

        <div className='plan-sec'>
          <div>
            <Text textstyle='plan-head' texts='Start Planning Your Next Adventure'/>
          </div>
          <div className='plan-btn-tx'>
          <Buttons buttx='Explore Destinations' butstyle='planbtn' butlink='planlink' triplink='./tripcatalog'/>
          <Text textstyle='plantx' texts='Find the perfect hotel, flight, or tour with just a few clicks.'/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
