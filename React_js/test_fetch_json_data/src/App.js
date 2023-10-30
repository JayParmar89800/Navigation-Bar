import React from 'react';
// import Navbar from './component/Navbar';
import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
import News from './component/News';


function App() {

  return (
    <Main>
    {/* <Navbar /> */}
    
    <Routes>
          <Route path="/" element={<News />} />
          <Route exact path='/:id' element={<News />} />   
        </Routes>
    </Main>
  );
}

export default App;
