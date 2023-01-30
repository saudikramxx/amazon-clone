import React from 'react'
import "./Home.css"
import Product from './Product'
import {v4 as uuidv4} from 'uuid';
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
         
        <Product 
        id={uuidv4()}
        title="cracking the coding interview"
         price={29.99}
         image ="https://m.media-amazon.com/images/I/619M-4xNINL.jpg"
         rating={5}/>
        <Product id={uuidv4()}
         title="Apple iPhone 13 (256GB)"
          price={799}
          image = "https://m.media-amazon.com/images/I/315oQlfQ6WL._AC_SR400,600_.jpg"
          rating={4}
        />
        
      </div>

      <div className='home__row'>
        <Product id={uuidv4()}
         title="Red Tape Men Hooded Sweatshirt"
          price={80}
          image = "https://m.media-amazon.com/images/I/71bDzgBQPZL._UL1500_.jpg-amazon.com/images/I/71bDzgBQPZL._UL1500_.jpg._AC_SR400,600_.jpg"
          rating={4}/>
        <Product id={uuidv4()}
         title="Apple Watch Series 8"
          price={500}
          image = "https://m.media-amazon.com/images/I/71DfMwITnaL._SX679_.jpg"
          rating={4}/>
        <Product id={uuidv4()} title="Samsung 275L 3 Star Inverter Frost"
          price={400}
          image = "https://m.media-amazon.com/images/I/51doUVvMA-L._AC_UL320_.jpg"
          rating={4}/>
      </div>

      <div className='home__row'>
        <Product id={uuidv4()}
         title="ASUS ROG Strix G17"
          price={800}
          image = "https://m.media-amazon.com/images/I/61bwqXfWiaL._SX679_.jpg"
          rating={4}/>
      </div>
      
    </div>
  )
}

export default Home