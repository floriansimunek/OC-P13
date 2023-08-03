/* IMPORTS */
import MockedService from './MockedService';
import Service from './Service';
import User from '@entities/User';

export default class UserService extends Service {
    static baseUrl = 'http://localhost:3001/api/v1/user';

    static async getUserData(userId) {
        const data = await this.fetchData(`/${userId}`);
        const user = new User(data);
        return user;
    }

    static async login(email, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        };

        try {
            const response = await this.fetchData('/login', requestOptions);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
