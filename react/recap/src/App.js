import logo from './logo.svg';
import './App.css';

function App() {
  const heros = ['Salaman', 'Shah Rukh', 'Amir', 'Dulkar','Mohon Lal']
  return (
    <div className="App">
        <Person></Person>
        <Person></Person>
        <Person></Person>
      <header className="App-header">
        
        <p>
          I Love React
        </p>
        <Person></Person>
        <Person></Person>
        <Person></Person>

       
      </header>
    </div>
  );
}

function Person(props){
  const personStyle ={
    border:'2px solid purple',
    margin:'20px'
  }
  return(
    <div style={personStyle}>
      <h1> name : </h1>
      <h3>profession:</h3>
    </div>
  )
}

export default App;
