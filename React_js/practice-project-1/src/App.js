import React from 'react';
import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
import './App.css';
import Fullpage from './components/Fullpage';
import Profile from './components/Profile';
import Login from './components/Login';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <Main>
    <Routes>
          <Route path="/" element={<Fullpage />} />
          <Route exact path='/Profile/:id' element={<Profile />} />   
          <Route exact path='/Login' element={<Login />} />  
          <Route exact path='/Mainage' element={<Mainpage />} />
 
        </Routes>
    </Main>
  );
}

export default App;
