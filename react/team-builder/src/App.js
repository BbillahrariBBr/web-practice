import logo from './logo.svg';
import './App.css';
import User from './Component/UserComponent/User';
import { useEffect, useState } from 'react';

function App() {
  const [users,setUser] = useState([]);
  useEffect(() =>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUser(data.results))
  },[])

  return (
    <div className="App">
      <h1>Team Builder</h1>
      {
        users.map(user => <User user = {user}></User>)
      }
    </div>
  );
}

export default App;
