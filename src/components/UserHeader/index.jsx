/* CSS */
import styles from './UserHeader.module.scss';

export default function UserHeader({ user }) {
    return (
        <header className={styles.userHeader}>
            <h1>
                Welcome back
                <br />
                {`${user.firstName} ${user.lastName}`}
            </h1>
            <button className={styles.editButton}>Edit Name</button>
        </header>
    );
}
