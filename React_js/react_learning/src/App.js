// import logo from './logo.svg';
import './App.css';


function Welcome(props)
{
  return <h1>Hello ,{props.name}</h1>;
}
function Doubl() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);

  return (
    <div>
      <h1>Doubled Numbers:</h1>
      <ul>
        {doubled.map((value) => (
         <li>{value}</li>
        ))}
      </ul>
    </div>
  );
}
function App()
{
  return(
    <div>
      <Welcome name="jp"/>
      <Welcome name="dp"/>
      <Welcome name="gp"/>
      <br />
      <Doubl  />
    </div>

   





  );

}


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
