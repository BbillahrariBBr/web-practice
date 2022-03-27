// import logo from './logo.svg';
import './App.css';
import User from './Component/UserComponent/User';
import { useEffect, useState } from 'react';

function App() {
  const [users,setUser] = useState([]);
  const [team,setTeam] = useState([]);
  useEffect(() =>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUser(data.results))
  },[])
  const addMember = (name) => {
    setTeam([...team,name]);
  }

  return (
    <div className="App">
      <h1 className='text-success'>Team Builder</h1>
      <ul>
        {team.map(m=> <li>{m}</li>)}
      </ul>
      {
        users.map(user => <User user = {user} addMember = {addMember}></User>)
      }
    </div>
  );
}

export default App;
