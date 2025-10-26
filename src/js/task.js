export default class Validator {
    constructor(name) {
        this.name = name;
    }

    validateUsername() {
        const usernameRegex = /^(?!.*\d{4,})(?!^[\d_-])(?!.*[\d_-]$)[a-z0-9_-]+$/i;
        return usernameRegex.test(this.name);
    }
}