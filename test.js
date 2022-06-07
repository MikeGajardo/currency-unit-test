
const { dollarsToYen } = require('./app.js');

test('turns 10 dollars into 1065 yen', () => {
    let total = dollarsToYen(10);
    expect(total).toBe(1065);
});

const { eurostoDollars } = require('./app.js');

test('turns 10 euros into 12 dollars', () => {
    let total = eurostoDollars(10);
    expect(total).toBe(12);
});

const { yenToPound } = require('./app.js');

test('turns 1000 yen into 6.254886630179828 pounds', () => {
    let total = yenToPound(1000);
    expect(total).toBe(6.254886630179828);
});