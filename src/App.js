import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
function App() {
  const [{},dispatch] =useStateValue()
  useEffect(() => {
     auth.onAuthStateChanged(authUser => {
      console.log('the usr is >>>',authUser);
      if(authUser){
        //user is logged in
        dispatch({
          type:'set_userr',
          user:authUser
        })
      }else{
        //user is not logged in
        dispatch({
          type:'set_userr',
          user:null
        })
      }

     })
  },[])
  return ( 
    <Router>
    <div className="App">
    
      <Routes>
       <Route path='/' element={<div><Header/><Home/></div>}/>
         
       <Route path='/checkout' element={
       
       <div>
       <Header/>
       <Checkout/>
       </div>
       }/>
      <Route path='/login' element={
        <div>
          <Login/>
        </div>
      }/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
