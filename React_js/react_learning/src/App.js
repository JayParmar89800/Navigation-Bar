// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';


function App()
{
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type) => {
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

  const toggleMode = () => 
  {
    if(mode === 'light')
    { 
      setmode('dark');
      showAlert("Dark Mode has been enabled ","success");
      document.body.style.backgroundColor='grey';
    }
    else
    {
      setmode('light');
      showAlert ("Light Mode has been enabled ","success");
      document.body.style.backgroundColor='white';
    }
  }

  return(

    <Main>
      <Navbar title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <Routes>

        <Route exact path='/' element={ <Textform showAlert={showAlert} heading="Counter" mode={mode} toggleMode={toggleMode}/>}/>
        <Route exact path='/about' element={ <About />}/>
        <Route  path='/*' element={ <ErrorPage />}/>

      </Routes>
    </Main>
    // <div>
   
   
    
    // {/* <Navbar /> */}

    // </div>
  );
}




// function Welcome(props)
// {
//   return <h1>Hello ,{props.name}</h1>;
// }
// function Doubl() {
//   const numbers = [1, 2, 3, 4, 5];
//   const doubled = numbers.map((number) => number * 2);

//   return (
//     <div>
//       <h1>Doubled Numbers:</h1>
//       <ul>
//         {doubled.map((value) => (
//          <li>{value}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// function Foreach() {
//   const numbers = [1, 2, 3, 4, 5];
//   const number_list=[];

//   numbers.forEach((no) => {
//     number_list.push(<li > {no} </li>);
//   });
  
//   return (
//     <div>
//       <h1>foreach loops:</h1>
//       <ul>
//         {number_list}
//       </ul>
//     </div>
//   );
// }
// function Propex(props)
// {
//   return <h2>Hello My self { props.brand }!</h2>;
// }
// function Garage() {
//   const nm = "Jay Parmar...";
//   return (
//     <>
//         <h1>Who lives in my garage?</h1>
//         <Propex brand={ nm } />
//     </>
//   );
// }
// function App()
// {
//   return(
//     <div>
//       <Welcome name="jp"/>
//       <Welcome name="dp"/>
//       <Welcome name="gp"/>
//       <br />
//       <Doubl  />
//       <br />
//       <Foreach />
//       <Garage/>
//     </div>
//   );

// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
