import logo from './logo.svg';
import './App.css';
// import { Route, Routes } from "react-router-dom";
import Logo from './Components/Logo';
import Links from './Components/Links';
import Images from './assets/img';
import Text from './Components/Text';
import Buttons from './Components/Buttons';
import Airplane from './Components/Airplane';

function App() {
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
    // </>
  );
}

export default App;
