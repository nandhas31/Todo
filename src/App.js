import './App.css';
import WelcomeMessage from './Welcome/welcomeMessage';
import Item from './List/Item'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>title</h2> 
      </header>
      <div className="content">
        <div className="sidebar">
          <h1>sidebar</h1>
        </div>
        <div className="content-container">
          <WelcomeMessage />
          <Item />
        </div>
      </div>

      
    </div>
  );
}

export default App;

