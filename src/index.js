/* CSS */
import './index.css';

/* DEPENDANCIES */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* PAGES */
import Home from '@pages/Home';
import SignIn from '@pages/SignIn';

/* COMPONENTS */
import Header from '@components/Header';
import Footer from '@components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signIn" element={<SignIn />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
