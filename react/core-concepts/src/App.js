import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Person></Person>
      <Person></Person>
      </header>
      
    </div>
  );
}

function Person() {
  return(
    <div>
      <h1>Name: Bakibillah</h1>
      <h3>Software Engineer</h3>
    </div>
  );
  
}

export default App;
