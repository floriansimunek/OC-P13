/* CSS */
import './index.css';

/* DEPENDANCIES */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* PAGES */
import Home from '@pages/Home';
import SignIn from '@pages/SignIn';
import User from '@pages/User';
import Error404 from '@pages/Error404';

/* COMPONENTS */
import Header from '@components/Header';
import Footer from '@components/Footer';

/* REDUX */
import { Provider } from 'react-redux';
import store from '@store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
