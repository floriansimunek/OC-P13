import MockedService from './MockedService';
import User from '@entities/User';

export default class UserService extends MockedService {
    static async getUserData(userId) {
        const data = await this.fetchData(`/${userId}`);
        const user = new User(data);
        return user;
    }
}
