/* IMPORTS */
import { useState } from 'react';
import { selectUserFirstname, selectUserLastname } from '@store/selectors/user';
import { useSelector } from 'react-redux';

/* CSS */
import styles from './UserHeader.module.scss';

export default function UserHeader({ user }) {
    const firstname = useSelector(selectUserFirstname());
    const lastname = useSelector(selectUserLastname());
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header className={styles.userHeader}>
            <h1>
                Welcome back
                <br />
                {`${user.firstName} ${user.lastName}`}
            </h1>
            <button className={styles.editButton} onClick={handleToggleModal}>
                Edit Name
            </button>
            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={`${styles.modalContent} bgDark`}>
                        <div
                            className={styles.modalClose}
                            onClick={handleToggleModal}
                        >
                            &#10060;
                        </div>
                        <form>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="firstname">Prénom</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    value={firstname}
                                />
                            </div>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="lastname">Nom</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    value={lastname}
                                />
                            </div>
                            <button className={styles.modalButton}>
                                Mettre à jours mes données
                            </button>
                        </form>
                        {/* {userLoginError && (
                            <p className={styles.error}>{userLoginError}</p>
                        )} */}
                    </div>
                </div>
            )}
        </header>
    );
}
