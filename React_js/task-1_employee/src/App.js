import React from 'react';
import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
import Fullpage from './components/Fullpage';
import Profile from './components/Profile';

function App() {
  return (
    <Main>
    <Routes>
          <Route path="/" element={<Fullpage />} />
          <Route exact path='/Profile/:id' element={<Profile />} />   

 
        </Routes>
    </Main>
  );
}

export default App;
