/* IMPORTS */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { handleAutoLogin } from '@store/slices/user';
import store from '@/store';

/* PAGES */
import Home from '@pages/Home';
import SignIn from '@pages/SignIn';
import User from '@pages/User';
import Error404 from '@pages/Error404';

/* COMPONENTS */
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function App() {
    useEffect(() => {
        store.dispatch(handleAutoLogin());
    }, []);

    return (
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
    );
}
