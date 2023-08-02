import MockedUsers from '@mocks/UsersData';

export default class MockedService {
    static async fetchData(id) {
        return MockedUsers.find((user) => user.id === id);
    }
}
