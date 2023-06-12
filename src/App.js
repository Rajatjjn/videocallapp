import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Room from './component/Room';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/room/:roomID" element={<Room/>}/>
  </Routes>
  );
}

export default App;
