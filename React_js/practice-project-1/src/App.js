import React from 'react';
import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
import './App.css';
import Fullpage from './components/Fullpage';
import Profile from './components/Profile';

function App() {
  return (

    <Main>
    {/* <Navbar/> */}

    <Routes>
          <Route path="/" element={<Fullpage />} />

          <Route exact path='/Profile/:id' element={<Profile />} />   

          {/* <Route exact path='/Page/:id' element={<Page />} />    */}
        </Routes>
    </Main>
  );
}

export default App;
