import logo from "./logo.svg";
import "./App.css";
import config from "./config";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React (configuration)
        </a>
      </header>
      <div> BaseURL: {config.baseURL}</div>
    </div>
  );
}

export default App;
