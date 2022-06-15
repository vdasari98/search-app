import logo from './image2vector.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form id="form">
          <input type="search" className='Search-Box' id="query" name="q" placeholder="Type a keyword"></input>
          <button className='Search-Button'>Search</button>
        </form>
      </header>
    </div>
  );
}

export default App;
