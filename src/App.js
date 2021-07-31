import './App.css';
import WelcomeMessage from './Welcome/welcomeMessage';
import List from './List/List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>todo</h2> 
      </header>
      <div className="content">
        <div className="sidebar">
          <h1>sidebar</h1>
        </div>
        <div className="content-container">
          <WelcomeMessage />
          <List />
        </div>
      </div>

      
    </div>
  );
}

export default App;

