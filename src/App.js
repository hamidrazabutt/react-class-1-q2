import logo from './logo.svg';
import './App.css';
import * as bar from './MyLibrary';



function App() {
  let str='Hello World'

  let obj={
    name: 'abc',
    id: 45456565
  }
  return (
    <div className="" >
      {Object.name}
      {Object.id}
    </div>
  )

  console.log('Func Calling', bar.AppName)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

} 




export default App;
