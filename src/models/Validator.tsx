export default class Validator {
    private emailRegex: RegExp;
    private nameRegex: RegExp;
    private passwordRegex: RegExp;

    constructor() {
        this.emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        this.nameRegex = /^[a-z]{1,}$/gim;
        this.passwordRegex = /^\w{1,}$/gim;
    }

    public name(name: string): boolean {
        if (this.nameRegex.test(name)) return true;
        return false;
    }

    public email(email: string): boolean {
        if (this.emailRegex.test(email)) return true;
        return false;
    }

    public password(name: string): boolean {
        if (this.passwordRegex.test(name)) return true;
        return false;
    }
}
