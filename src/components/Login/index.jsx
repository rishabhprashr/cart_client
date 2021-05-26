import React from 'react';
import {post} from './../../axios';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Login() {

  const [email,setEmail] = useState('');
  const [pwd,setPwd] = useState('');
  const history = useHistory();


  const handleSubmit = async () => {
    console.log(email,pwd);
    try{
      const data = {"email": email, "password": pwd};
      const res = await post('/sessions',data);
      console.log(res);
      if(res.success){
        localStorage.setItem('token',res.user.token);
        history.push('/');
      }
      
      console.log(localStorage.getItem('token'));
    }catch(e){
      console.log(e);
      window.location.reload();
      alert("Try again wrong credentials!!!!");
    }

  }
  return (
    <div>
      <form action='#' onSubmit={handleSubmit}>
        <div >
          <label><b>Username</b></label>
          <input type="text" value={email} id={"name"} onChange={(e) => setEmail(e.target.value)} required/>
          <label><b>Password</b></label>
          <input type="password" value={pwd} id={"pwd"} onChange={(e) => setPwd(e.target.value)} required/>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;
