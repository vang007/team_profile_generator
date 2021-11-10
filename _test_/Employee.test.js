const Employee = require('../lib/Employee');
const employee = new Employee('name', 'id', 'email');

test('testing functionality of object', () => {

  expect(employee.name).toBe("La Ziest Guy");
  expect(employee.id).toBe("34216");
  expect(employee.email).toBe("catchin_Z'sss");
})