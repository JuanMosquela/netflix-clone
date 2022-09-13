import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar'
import App from './App';
import MyList from './pages/MyList';
import ScrollToTop from './components/ScrollToTop';
import Movies from './pages/Movies';
import Series from './pages/Series';
import UserProvider from './context/UserProvider';
import PrivateRoutes from './pages/PrivateRoutes';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserProvider>
            <ScrollToTop />     
            <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path='/' element={<App />} exact/>           

                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signUp' element={<SignUp />} />
            </Routes>        
        </UserProvider>       
    </BrowserRouter>
    
  
);


