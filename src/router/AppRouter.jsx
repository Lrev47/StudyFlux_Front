import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../Pages/HomePage/HomePage.jsx'
import Header from '../Components/Header/Header.jsx';
import Footer from '../Components/Footer/Footer.jsx';



function AppRouter() {

    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    );
}

export default AppRouter;