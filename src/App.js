import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return ( 
    <Router>
    <div className="App">
    <Header/>
      <Routes>
       <Route path='/' element={<div><Home/></div>}/>
         
       <Route path='/checkout' element={
       <div>
       <Checkout/>
       </div>
       }/>
      
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
