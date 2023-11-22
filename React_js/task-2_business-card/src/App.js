import React from 'react';
import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import ResponsiveAppBar from './components/Navbar'
import './App.css'
// import BusinessCard1 from './components/BusinessCard1';
// import BusinessCard2 from './components/BusinessCard2';
// import BusinessCard3 from './components/BusinessCard3';
// import BusinessCard4 from './components/BusinessCard4';
// import BusinessCard5 from './components/BusinessCard5';

// import '../public/img'

function App() {
  return (
    <Main>
    <ResponsiveAppBar/>
    <Routes>
          <Route path="/" element={<Mainpage />} />
          {/* <Route path="/" element={<BusinessCard1 />} /> */}
          {/* <Route path="/" element={<BusinessCard2 />} /> */}
          {/* <Route path="/" element={<BusinessCard3 />} /> */}
          {/* <Route path="/" element={<BusinessCard4 />} /> */}
          {/* <Route path="/" element={<BusinessCard5 />} /> */}
        </Routes>
    </Main>
  );
}

export default App;
