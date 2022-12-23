import React from 'react'
import "./Product.css"
function Product(props) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>Cracking the Coding Interview</p>
        <p className='product__price'>
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <div className='product__rating'></div>
            <p>⭐</p>
            
        </div>
        <img 
         alt='' 
         src='https://m.media-amazon.com/images/I/619M-4xNINL.jpg'>
        </img>
        <button>Add to Basket</button>
    </div>

  )
}

export default Product