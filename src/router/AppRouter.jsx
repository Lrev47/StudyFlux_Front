import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../Pages/HomePage/HomePage.jsx'
import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Login from '../Pages/LogIn/LogIn.jsx';
import SignUp from '../Pages/SignUp/SignUp.jsx';
import TierPage from '../Pages/TierPage/TierPage.jsx';




function AppRouter() {

    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tiers" element={<TierPage />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    );
}

export default AppRouter;