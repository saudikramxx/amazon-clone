import React from 'react'
import "./Subtotal.css"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',})
function Subtotal() {
  const [{basket},disptach] =useStateValue(); 
  
  return (
    
    <div className='subtotal'>
    
            <p>
            
                Subtotal({basket.length} items):
                <strong>$ {formatter.format(getBasketTotal(basket))}</strong>
            </p>
            <small className='subtotal__gift'>
            <input type = "checkbox"/>This order contains a gift
            </small>
            
        
        
    
     <button> Proceed to checkout</button>
    </div>
  )
}

export default Subtotal