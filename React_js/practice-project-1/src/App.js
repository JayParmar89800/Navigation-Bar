import React from 'react';
import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Fullpage from './components/Fullpage';

function App() {
  return (

    <Main>
    <Navbar/>

    <Routes>
          <Route path="/" element={<Fullpage />} />
          {/* <Route exact path='/Page/:id' element={<Page />} />    */}
        </Routes>
    </Main>
  );
}

export default App;
