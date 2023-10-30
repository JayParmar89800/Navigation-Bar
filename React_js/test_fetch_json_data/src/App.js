import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
import News from './component/News';


function App(props) {

  return (
    <Main>
    <Navbar />
    
    <Routes>
          <Route path="/" element={<News allData={true} />} />
          <Route exact path='/:id' element={<News id={props.id}/>} />   
          <Route exact path='/:id' element={<News id={props.id}/>} /> 
          <Route exact path='/:id' element={<News id={props.id}/>} />   
          <Route exact path='/:id' element={<News id={props.id}/>} />   
          <Route exact path='/:id' element={<News id={props.id}/>} />   
          <Route exact path='/:id' element={<News id={props.id}/>} />   
          <Route exact path='/:id' element={<News id={props.id}/>} />   
          <Route exact path='/:id' element={<News id={props.id}/>} />   
          <Route exact path='/:id' element={<News id={props.id}/>} />   
          <Route exact path='/:id' element={<News id={props.id}/>} />  
          <Route exact path='/:id' element={<News id={props.id}/>} />   
          <Route exact path='/:id' element={<News id={props.id}/>} />      

          
         
   
  
        </Routes>
    </Main>
  );
}

export default App;
