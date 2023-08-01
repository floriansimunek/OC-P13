/* CSS */
import styles from './UserHeader.module.scss';

export default function UserHeader() {
    return (
        <header className={styles.userHeader}>
            <h1>
                Welcome back
                <br />
                Tony Jarvis!
            </h1>
            <button className={styles.editButton}>Edit Name</button>
        </header>
    );
}
