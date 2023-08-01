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
    return (
        <main className="bgDark">
            <UserHeader />
            <AccountsList accounts={ACCOUNTS} />
        </main>
    );
}
