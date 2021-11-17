const Manager = require('../lib/Employee.js');
const manager = new Manager('Kazuya', '12111958', 'g0dW1ndF1$t@mishimaCorp.com', '4311');

expect(manager.name).toBe('Kazuya');
expect(manager.id).toBe('12111958');
expect(manager.email).toBe('g0dW1ndF1$t@mishimaCorp.com');
expect(manager.officeNumber).toBe('4311');
expect(manager.role).toBe('Manager');

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Kazuya');
});

test('test if we can get the name from the getId() method', () => {
    expect(manager.getId()).toBe('12111958');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('g0dW1ndF1$t@mishimaCorp.com');
});

test('test if we can get the name from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('12111958');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});