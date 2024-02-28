import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { Authcontext, FirebaseContext } from './Store/Context';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './Store/postContext';


function App() {
  const{user,setUser}=useContext(Authcontext)
  const {firebase}=useContext(FirebaseContext)
  
  useEffect(()=>{
    console.log(user);
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  })
  return (
    <div>

      <Post>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          
          <Route path='/Create'   element={ <Create/>}/>

          <Route path='/view'   element={ <View/>}/>
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
