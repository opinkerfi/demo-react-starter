import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Breyttu kóðanum undir <code>src/App.js</code> og ýttu á vista til að endurhlaða.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Læra React
        </a>
      </header>
    </div>
  );
}

export default App;
