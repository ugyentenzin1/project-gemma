export class User {
    name!: string;
    id!: string;
    passowrd!: string;
    constructor(public userName: string, public userId: string, public userPassword: string) {
        this.name = userName;
        this.id = userId;
        this.passowrd = userPassword;
    }
}