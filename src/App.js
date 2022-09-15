

import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { UserContext } from './context/UserProvider';
import requests from './utils/requests';




function App() {
  const navigate = useNavigate()
    const { user } = useContext(UserContext)

    useEffect(() => {
        if(!user) navigate('/login') 
      
    }, [])
    
  return (
    <div className='App'>
      <Navbar />
      <Banner url={requests.fetchNetlixOriginals} />
      {user && <Outlet />} 
    </div>
  )
}

export default App;
