const Employee = require('../lib/Employee.js');
const employee = new Employee('Paul', '05021956', 'skullCru$h1ngfen1x@gmail.com');

test('test if we can get constructor values for the employee object', () => {
    expect(employee.name).toBe('Paul');
    expect(employee.id).toBe('05021956');
    expect(employee.email).toBe('skullCru$h1ngfen1x@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Paul');
});

test('test if we can get the name from the getId() method', () => {
    expect(employee.getId()).toBe('05021956');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('skullCru$h1ngfen1x@gmail.com');
});


test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});