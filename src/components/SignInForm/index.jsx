/* CSS */
import styles from './SignInForm.module.scss';

export default function SignInForm() {
    return (
        <div className={styles.main}>
            <section className={styles.SignInContent}>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form action="/user/1">
                    <div className={styles.inputWrapper}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className={styles.inputRemember}>
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className={styles.SignInButton}>Sign In</button>
                </form>
            </section>
        </div>
    );
}
