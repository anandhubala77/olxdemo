import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../Store/Context';
import { useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');


  const {firebase}=useContext(FirebaseContext)

  const handleSubmit =  (e) => {
    e.preventDefault();
    
    
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      
      result.user.updateProfile({displayName:userName}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          userName:userName,
          phone:phone
        }).then(()=>{
          
          navigate('/login');
        })


      })
    
    })
  
   
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <a href='#'>Login</a>
      </div>
    </div>
  );
}
