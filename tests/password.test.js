const isStrongPassword = require('./password');

test('valid strong password', () => {
  expect(isStrongPassword('DevOps123')).toBe(true);
});

test('fails for short password', () => {
  expect(isStrongPassword('Dev1')).toBe(false);
});

test('fails without uppercase', () => {
  expect(isStrongPassword('devops123')).toBe(false);
});

test('fails without number', () => {
  expect(isStrongPassword('DevOps')).toBe(false);
});
