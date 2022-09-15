import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

import App from './App';
import MyList from './pages/MyList';
import ScrollToTop from './components/ScrollToTop';
import UserProvider from './context/UserProvider';
import Home from './pages/Home';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserProvider>
            <ScrollToTop />     
            <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            
            <Route exact path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="series" element={<Series />} />

              <Route path="myList" element={<MyList />} />
            </Route>

            </Routes>        
        </UserProvider>       
    </BrowserRouter>
    
  
);


