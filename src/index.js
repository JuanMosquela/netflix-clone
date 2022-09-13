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




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>  
        <Navbar /> 
        <ScrollToTop />     
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='/myList' element={<MyList />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
        </Routes>        
    </BrowserRouter>
    
  
);


