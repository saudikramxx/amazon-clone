import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
  <div className='header'>
    <img 
    alt='amzaon icon'
    className='header__logo'
    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
    <div className='header__search'>
    
    <input className='header__searchInput'
     type="text"/>
     <SearchIcon className='header__searchIcon'></SearchIcon>
     
    </div>

    <div className='header__nav'>
      

      <div className='header__option'>
        <span className='header__optionLineOne'>
          hello user
          </span>
        <span className='header__optionLineTwo'>
          sign in
        </span>
      </div>


      <div className='header__option'>
        <span className='header__optionLineOne'>
          Returns
          </span>
        <span className='header__optionLineTwo'>
          & order
        </span>
      </div>


      <div className='header__option'>
        <span className='header__optionLineOne'>
          Your
          </span>
        <span className='header__optionLineTwo'>
          Prime
        </span>
      </div>

      
      <div className='header__optionBasket'>
        <ShoppingBasketIcon/>
        <span className='header__optionlineTwo
        header__basketCount'>0</span>
      </div>
  
    </div>

    

   
   
  </div>)
}

export default Header