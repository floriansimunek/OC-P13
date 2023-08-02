/* CSS */
import styles from './Header.module.scss';

/* DEPENDANCIES */
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

/* ASSETS */
import logo from '@assets/argentBankLogo.png';

export default function Header() {
    const location = useLocation();
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        location.pathname === '/user/1'
            ? setIsConnected(true)
            : setIsConnected(false);
    }, [location]);

    return (
        <header className={styles.mainNav}>
            <Link to="/" className={styles.mainNavLogo}>
                <img
                    src={logo}
                    className={styles.mainNavLogoImage}
                    alt="Logo ArgentBank"
                />
            </Link>
            {isConnected ? (
                <div>
                    <Link to="/signIn" className={styles.mainNavItem}>
                        <i className="fa fa-user-circle"></i> Tony&nbsp;
                    </Link>
                    <Link to="/" className={styles.mainNavItem}>
                        <i className="fa fa-sign-out"></i> Sign Out
                    </Link>
                </div>
            ) : (
                <Link to="/signIn" className={styles.mainNavItem}>
                    <i className="fa fa-user-circle"></i> Sign In
                </Link>
            )}
        </header>
    );
}
