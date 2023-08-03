/* IMPORTS */
import MockedService from './MockedService';
import Service from './Service';
import User from '@entities/User';

export default class UserService extends Service {
    static baseUrl = 'http://localhost:3001/api/v1/user';

    static async login(email, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        };

        try {
            return await this.fetchData('/login', requestOptions);
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getUserData(token) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            return await this.fetchData('/profile', requestOptions);
        } catch (error) {
            throw new Error(error);
        }
    }
}
