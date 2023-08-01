/* CSS */
import styles from './AccountsList.module.scss';

/* COMPONENTS */
import Account from '@components/Account';

export default function AccountsList({ accounts }) {
    return (
        <ul className={styles.accountsList}>
            {accounts.map((account, key) => (
                <li key={key} className={styles.accountsListItem}>
                    <Account account={account} />
                </li>
            ))}
        </ul>
    );
}
