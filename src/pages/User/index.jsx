/* IMPORTS */
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserToken } from '@store/selectors/user';
import UserService from '@services/UserService';

/* COMPONENTS */
import UserHeader from '@components/UserHeader';
import AccountsList from '@components/AccountsList';

/* DATA */
const ACCOUNTS = [
    {
        title: 'Argent Bank Checking (x8349)',
        amount: 2082.79,
        description: 'Available Balance',
    },
    {
        title: 'Argent Bank Savings (x6712)',
        amount: 10928.42,
        description: 'Available Balance',
    },
    {
        title: 'Argent Bank Credit Card (x8349)',
        amount: 184.3,
        description: 'Current Balance',
    },
];

export default function User() {
    const navigate = useNavigate();
    const { id: userId } = useParams();
    const token = useSelector(selectUserToken());
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await UserService.getUserData(token);
                if (userData.status === 401) navigate('/SignIn');
                setUserData(userData.body);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [userId, userData]);

    return (
        <main className="bgDark">
            {userData && <UserHeader user={userData} />}
            <AccountsList accounts={ACCOUNTS} />
        </main>
    );
}
