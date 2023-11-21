import React from 'react';
import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import ResponsiveAppBar from './components/Navbar'
import './App.css'
// import '../public/img'

function App() {
  return (
    <Main>
    <ResponsiveAppBar/>

    <Routes>

          <Route path="/" element={<Mainpage />} />
        </Routes>
    </Main>
  );
}

export default App;
