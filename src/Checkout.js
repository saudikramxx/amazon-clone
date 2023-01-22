import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
function Checkout() {
  return (
    <div className='checkout'>
        
      <div className='checkout__left'>
        <img
        className='checkout_add' 
        src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg'/>
        
        <div>
          <h2 className='checkout_title'>Your Shopping Basket</h2>
          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}       
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout