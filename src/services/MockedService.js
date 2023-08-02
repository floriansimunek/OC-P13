import MockedUsers from '@mocks/UsersData';

export default class MockedService {
    static fetchData(id) {
        return MockedUsers.find((user) => user.id === id);
    }
}
