import React from 'react'
import Main from '../components/Main'
import Crusal from '../components/Crusal'
import Reports from '../components/Reports'
import Pagination from '../components/Pagination'
import VehicalsInfo from '../components/VehicalsInfo'
import Bid from '../components/Bid'

const HeroSection = () => {
  return (
    <>
    <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 mx-20 mt-20'>
    <div>
    <Main/>
    <Crusal/>
    <Reports/>
    <Pagination/>
    </div>
    <div className=''>
    <VehicalsInfo/>
    <Bid/>
    </div>
    </div>
    
    
    </>
  )
}

export default HeroSection