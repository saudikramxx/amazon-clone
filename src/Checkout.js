import userEvent from '@testing-library/user-event';
import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"
function Checkout() {
  const [{basket,user},disptach] = useStateValue();
  
console.log(user)
  return (
    <div className='checkout'>
        
      <div className='checkout__left'>
        <img
        className='checkout_add' 
        src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg'/>
        
        <div>
        <h3>Hello, {user?.email}</h3>
          <h2 className='checkout_title'>Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id = {item.id}
              title ={item.title}
              image = {item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/*CheckoutPoduct*/}
          {/*CheckoutPoduct*/}
          {/*CheckoutPoduct*/}   
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout