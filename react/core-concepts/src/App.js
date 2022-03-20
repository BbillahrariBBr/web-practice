import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Person name="Abdullah" occupation="software Engineer"></Person>
      <Person name= "Bakibillah bin Firoz bin rashid" occupation= "Programmer"></Person>
      </header>
      
    </div>
  );
}

function Person(props) {
  const personStyle ={
    border:'2px solid red',
    margin: '10px'
  }
  console.log(props);
  return(
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>{props.occupation}</h3>
    </div>
  );
  
}

export default App;
