import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image'
            src='https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/22dc1d38-ac1a-4ebd-ad4b-38caf3a96d3b._UR1280,600_.jpeg'
            alt='prime'
        />
      </div>

      <div className='home__row'>
        <Product/>
        <Product/>
        
      </div>

      <div className='home__row'>
        <Product/>
        <Product/>
        <Product/>
      </div>

      <div className='home__row'>
        <Product/>
      </div>
      
    </div>
  )
}

export default Home