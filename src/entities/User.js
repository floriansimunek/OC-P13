export default class User {
    id;

    firstName;
    lastName;
    email;

    constructor(userData) {
        this.id = userData.id;
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.email = userData.email;
    }
}
