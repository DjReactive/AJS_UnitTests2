import {healthStatus} from './app.js';

test('Check Health Status', () => {
  expect(healthStatus('маг', 90)).toBe('healthy');
});
