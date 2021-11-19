const Manager = require('../lib/Manager');
const manager = new Manager('Bos Sydude', '1738', 'myWayOrTheHighway@gmail.com', '20');

test('testing: value retrieval for Manager object', () => {
    expect(manager.name).toBe('Bos Sydude');
    expect(manager.id).toBe('1738');
    expect(manager.email).toBe('myWayOrTheHighway@gmail.com');
    expect(manager.officeNumber).toBe('20');
})

    test('Manager name retrieval using getName() method', () => {
    expect(manager.getName()).toBe('Bos Sydude');
    })
    
    test('Manager id retrieval using getId() method', () => {
    expect(manager.getId()).toBe('1738');
    })
    
    test('Manager email retrieval using getEmail() method', () => {
    expect(manager.getEmail()).toBe('myWayOrTheHighway@gmail.com');
    })

    test('Manager officeNumber retrieval using getEmail() method', () => {
    expect(manager.getOfficeNumber()).toBe('20');
    })    
    
    test('Manager role retrieval using getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
    })