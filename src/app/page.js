import Banner from '@/components/Banner'
import Calltoaction from '@/components/Calltoaction'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Keyfeatures from '@/components/Keyfeatures'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Keyfeatures/>
      <Services/> 
      <Reviews/>
      <Calltoaction/>
      <Footer/>
    </div>
  )
}

export default page