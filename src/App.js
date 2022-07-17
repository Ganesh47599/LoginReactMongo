import React, { useState } from 'react'
import './App.css'

import Home from './components/home/home'
import Login from './components/login/login'
import Register from './components/register/register'
import {
  BrowserRouter as Router,
  Route,Routes
  
} from "react-router-dom";
import {  Navbar} from 'react-bootstrap';
function App() {
  const [user,setLoginUser]=useState({});
  
  return (
    <div className="App">
 { /*  <Router>
      <Routes>
        <Route exact path="/"><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/register"><Register /></Route>
      </Routes>
    </Router> */}
    <Router>
  <Navbar />
  <Routes>
   
   <Route exact path="/" element={<Home />}>
  
          
    {/*
      user && user.id
      ?
      <Home />
      :
      <Login />*/
    }
    
   </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
</Router>
 
      
    </div>
 
  );
}

export default App;
