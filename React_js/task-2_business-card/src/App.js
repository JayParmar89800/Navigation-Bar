import React from 'react';
import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import ResponsiveAppBar from './components/Navbar'
import '../src/style/App.css'
import '../src/style/SecondPage.css'
import SecondPage from './components/SecondPage';

function App() {
  return (
    <Main>
    <ResponsiveAppBar/>
    <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/SecondPage/:selectedCard" element={<SecondPage />} />
        </Routes>
    </Main>
  );
}

export default App;
