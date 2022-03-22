import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const heros = [{name:'Salaman',prof:'business'},
  {name: 'Shah Rukh', prof:'jobJibi'}, 
  {name: 'Amir', prof:'trailor'}, {name:'Dulkar',prof:'archtech'},{name: 'Mohon Lal',prof:'killer'}]
  return (
    <div className="App">
        {
          heros.map(hero => <Person name= {hero.name} prof = {hero.prof}></Person>)
        }

        <MovieCounter></MovieCounter>
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

function MovieCounter(){
  const [count, setCount] = useState(5)
  const handleClick = () => setCount(count +1);
  const removeClick = () => setCount(count - 1)

  return(
    <div>
      <button onClick={handleClick}>Add movie</button>
      <h5>number of movie {count}</h5>
      <MovieDisplay movies ={count+1}></MovieDisplay>
      <button onClick={removeClick}>Remove movie</button>

    </div>
  )
}

function MovieDisplay(props) {
  return(
    <div>
      <h4>Movies i have acted:{props.movies}</h4>
    </div>
  )
}

function Person(props){
  const personStyle ={
    border:'2px solid purple',
    margin:'20px'
  }
  return(
    <div style={personStyle}>
      <h1> name :{props.name} </h1>
      <h3>profession:{props.prof}</h3>
    </div>
  )
}

export default App;
