/* IMPORTS */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '@store/slices/user';

/* CSS */
import styles from './SignInForm.module.scss';

export default function SignInForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password, rememberMe }));
    };

    return (
        <div className={styles.main}>
            <section className={styles.SignInContent}>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputRemember}>
                        <input
                            type="checkbox"
                            id="remember-me"
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className={styles.SignInButton}>Sign In</button>
                </form>
            </section>
        </div>
    );
}
