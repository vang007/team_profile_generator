const sum = require('../app.js');

test('checks to see if one plus 2 equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});