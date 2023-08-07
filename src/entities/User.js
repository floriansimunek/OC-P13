export default class User {
    id;

    firstName;
    lastName;
    email;

    token;
    error;

    constructor(userData) {
        this.id = userData.id;
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.email = userData.email;
        this.token = userData.token;
        this.error = userData.error;
    }
}
