/* CSS */
import styles from './Header.module.scss';

/* IMPORTS */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserToken } from '@/store/selectors/user';

/* ASSETS */
import logo from '@assets/argentBankLogo.png';

export default function Header() {
    const token = useSelector(selectUserToken);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (token) setIsConnected(true);
    }, [token]);

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
