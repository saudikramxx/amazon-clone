import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'
import { Link,Navigate,useNavigate} from 'react-router-dom'
import { auth } from './firebase';
import "./Login.css"
function Login() {
    const navigate = useNavigate(); 
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIN = e => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email,password)
    .then(auth=>{
        navigate("/")
    })
    .catch(error=>{alert(error.message)})
  }
  
  const register = e =>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        console.log(auth);
        if (auth){
            navigate("/")
        }
    })
    .catch(error => alert(error.message))
  }
    return (
    <div className='login'>
    <Link to= '/'>
    <img className='login_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'
    />
    </Link>
    <div className='login__container'>
    <h1>sign-in</h1>
    <form>
        <h5>E-mail</h5>
        <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

        <h5>password</h5>
        <input type = "password" value={password} onChange={
            e=>setPassword(e.target.value)
        } />
        <button type='submit' onClick={signIN} className='login__SignInButton'>Sign In</button>
    <p>
   By signing-in, you agree to  the AMAZONE FAKE CLONE
   Conditions of Use & sale. plese see our Privacy 
   Notice,our cookies Notice and our Intrest-Basedr ads Notice
    </p>
    </form>
    
    <button
    onClick={register}
    className='login__registerButton'>
        Create Your Amazon Account
    </button>
    </div>
    </div>
  )
}

export default Login