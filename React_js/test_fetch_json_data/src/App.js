// import React from 'react';
// // import Navbar from './component/Navbar';
// import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
// import News from './component/News';

// function App() {
//   return (
//     <Main>
//     <Routes>
//           <Route path="/" element={<News />} />
//           <Route exact path='/:id' element={<News />} />   
//         </Routes>
//     </Main>
//   );
// }
// export default App;
import React from 'react'
import TableData from './component/TableData'


export default function App() {
  return (
    <div>
      <h1 className='text-center'>Hello World</h1>
      <TableData/>
    </div>
  )
}