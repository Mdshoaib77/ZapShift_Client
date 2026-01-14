import React from 'react'
import Banner from './Banner/Banner'
import HowItWorksSection from '../../../Components/HowItWorksSection/HowItWorksSection'
import OurServicesSection from '../../../Components/OurServicesSection/OurServicesSection'
import Brands from '../Brands/Brands'

const Home = () => {
  return (
    <div>
<Banner></Banner>
<HowItWorksSection></HowItWorksSection>
<OurServicesSection></OurServicesSection>
<Brands></Brands>
    </div>
  )
}

export default Home
