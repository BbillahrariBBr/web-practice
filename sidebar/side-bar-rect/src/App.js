
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Anaytics from "./Pages/Anaytics";
import FileManager from "./Pages/FileManager";
import Messages from "./Pages/Messages";

import Order from "./Pages/Order";
import Saved from "./Pages/Saved";
import Setting from "./Pages/Setting";

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Dashboard/>} ></Route>
          <Route path='/users' element={<Users/>}/>
          <Route path='/analytics' element={<Anaytics/>}/>
          <Route path='/filemanager' element={<FileManager/>}/>
          <Route path='/messages' element={<Messages/>}/>

          <Route path='/order' element={<Order/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='*' element={<> Elemennt not found</>}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
