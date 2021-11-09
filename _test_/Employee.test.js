const Employee = require('../Employee');
const employee = new Employee('name', 'id', 'email');

test('testing functionality of object', () => {

  expect(employee.name).toBe('health');
  expect(employee.id).tobe(expect.any(Number));
  expect(employee.email).toBe('health');

});

test('creates a random potion object', () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});