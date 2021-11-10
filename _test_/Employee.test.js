const Employee = require('../lib/Employee');
const employee = new Employee('name', 'id', 'email');

test('testing: value retrieval for Employee object', () => {

  expect(employee.name).toBe("La Ziest Guy");
  expect(employee.id).toBe("34216");
  expect(employee.email).toBe("catchin_Zs@gmail.com");
})

test('Employee name retrieval using getName() method', () => {
  expect(employee.getName()).toBe('La Ziest Guy');
})

test('Employee id retrieval using getId() method', () => {
  expect(employee.getId()).toBe('La Ziest Guy');
})

test('Employee email retrieval using getEmail() method', () => {
  expect(employee.getEmail()).toBe('La Ziest Guy');
})

test('Employee role retrieval using getRole() method', () => {
  expect(employee.getRole()).toBe('Employee');
})