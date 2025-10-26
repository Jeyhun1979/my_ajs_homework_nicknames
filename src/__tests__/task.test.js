import Validator from '../js/task';

describe('Validator.validateUsername', () => {
    test('valid username: letters only', () => {
        const v = new Validator('username');
        expect(v.validateUsername()).toBe(true);
    });

    test('valid username: letters, digits, dash and underscore', () => {
        const v = new Validator('user_123-name');
        expect(v.validateUsername()).toBe(true);
    });

    test('valid username: case insensitive', () => {
        const v = new Validator('UserName');
        expect(v.validateUsername()).toBe(true);
    });

    test('invalid username: more than three digits in a row', () => {
        const v = new Validator('user1234name');
        expect(v.validateUsername()).toBe(false);
    });

    test('invalid username: starts with a digit', () => {
        const v = new Validator('1username');
        expect(v.validateUsername()).toBe(false);
    });

    test('invalid username: starts with a dash', () => {
        const v = new Validator('-username');
        expect(v.validateUsername()).toBe(false);
    });

    test('invalid username: starts with an underscore', () => {
        const v = new Validator('_username');
        expect(v.validateUsername()).toBe(false);
    });

    test('invalid username: ends with a digit', () => {
        const v = new Validator('username1');
        expect(v.validateUsername()).toBe(false);
    });

    test('invalid username: ends with a dash', () => {
        const v = new Validator('username-');
        expect(v.validateUsername()).toBe(false);
    });

    test('invalid username: ends with an underscore', () => {
        const v = new Validator('username_');
        expect(v.validateUsername()).toBe(false);
    });

    test('invalid username: contains forbidden characters', () => {
        const v = new Validator('user!name');
        expect(v.validateUsername()).toBe(false);
    });
});

