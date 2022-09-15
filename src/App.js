

import { Outlet } from 'react-router';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import requests from './utils/requests';



function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Banner url={requests.fetchNetlixOriginals} />
      <Outlet />   
    </div>
  );
}

export default App;
