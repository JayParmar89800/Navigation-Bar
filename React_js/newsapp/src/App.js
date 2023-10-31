
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  
  const pagesize= 12;
  const country="in";
  // const apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = "112c76b6ce774b699c7db99508e526b7";


  const [progress,setProgress]=useState(0);
 
  
    document.body.style.backgroundColor='#ced4da';
    return (
      <Main>
      
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pagesize} country={country} category="general"/>} />   
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pagesize={pagesize} country={country} category="business"/>}/> 
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pagesize={pagesize} country={country} category="entertainment"/>}/>
          <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pagesize} country={country} category="general"/>}/>   
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pagesize={pagesize} country={country} category="health"/>}/>   
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pagesize={pagesize} country={country} category="science"/>}/>   
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pagesize={pagesize} country={country} category="sports"/>}/>   
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pagesize={pagesize} country={country} category="technology"/>}/>   
        </Routes>
      </Main>
    )
  
}

export default App;