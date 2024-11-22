import logo from './logo.svg';
import './App.css';
import RollingSongBanner from './RollingSongBanner'

function App() {
  return (
    <div className="App">


      <RollingSongBanner />
      
      <header className="App-header">
        <div className = "title-text">
          <h1>  Hello, Hero.  </h1>
        </div>
      

        <img src={logo} className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        
      </header>

      

      </div>
      
  );
}

export default App;
