import React from 'react';
import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
import Page from './component/Page';
import FullPage from './component/FullPage';


function App() {
  return (
    <Main>
    <Routes>
          <Route path="/" element={<FullPage />} />
          <Route exact path='/Page/:id' element={<Page />} />   
        </Routes>
    </Main>
  );
}
export default App;
// import React from 'react'
// import TableData from './component/TableData'


// export default function App() {
//   return (
//     <div>
//       <h1 className='text-center'>Hello World</h1>
//       <TableData/>
//     </div>
//   )
// }
