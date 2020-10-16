import React, {useState} from "react";
import "./styles.css";
import { validateEmail } from './utils';
import Input from './Input';

//Test Data//
 const email = 'abc@gmail.com';
 const pwd = 'test';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  function handleChange(e, type) {
    if(type === 'username') {
      setUsername(e.target.value)
    } else if(type === 'password') {
      setPassword(e.target.value)
    }
  } 

  function validateAndSubmit() {
    if(!validateEmail(username)) {
      setMessage("Invalid username")
    }else if (password===""){
      setMessage("Empty password")
    }else{

    if(username === email && pwd === password) {
      setMessage("Login successfull...Redirecting now...")
      // Needs to redirect after this
    } else {
      setMessage("Invalid credentials")
    }
  }

  }
  return (
    <div className="App">
      <h2>MY Login Page</h2>
      <Input value={username} handleChange={(e) => handleChange(e, 'username')}/>
      <Input value={password} handleChange={(e) => handleChange(e, 'password')}/>
      <button className='btnLogin' onClick={validateAndSubmit}>Login </button>
      
      <div>{message}</div>
    </div>
  );
}
