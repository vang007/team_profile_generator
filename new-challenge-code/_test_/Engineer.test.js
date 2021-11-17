const Engineer = require('../lib/Employee.js');
const engineer = new Engineer('Jin', '09291978', 'gr8estD3v1L@kazamaCorp.com', 'vang007');

test('test if we can get engineer object values', () => {
    expect(engineer.name).toBe('Jin');
    expect(engineer.id).toBe('09291978');
    expect(engineer.email).toBe('gr8estD3v1L@kazamaCorp.com');
    expect(engineer.role).toBe('Engineer');
})

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Jin');
});

test('test if we can get the name from the getId() method', () => {
    expect(engineer.getId()).toBe('09291978');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('gr8estD3v1L@kazamaCorp.com');
});

test('test if we can get the name from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('vang007');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});