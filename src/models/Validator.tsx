import React from "react";

export default class Validator {
    private emailRegex: RegExp;
    private nameRegex: RegExp;
    private passwordRegex: RegExp;

    constructor() {
        this.emailRegex = /^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim;
        this.nameRegex = /^([a-z]{1,})([ ]{1}[a-z]{1,}){0,}$/gim;
        this.passwordRegex = /^\w{1,}$/gim;
    }

    public name(name: string): boolean {
        if (this.nameRegex.test(name)) return true;
        return false;
    }

    public email(name: string): boolean {
        if (this.emailRegex.test(name)) return true;
        return false;
    }

    public password(name: string): boolean {
        if (this.passwordRegex.test(name)) return true;
        return false;
    }
}
