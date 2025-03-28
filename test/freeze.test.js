import TimeTitan from '../index.js';
import freeze from '../src/freeze.js';

describe('freeze', () => {
  test('should freeze time', () => {
    const titi = new TimeTitan();
    const beforeFreeze = Date.now();
    
    freeze(titi);
    const afterFreeze = Date.now();

    expect(afterFreeze).toBe(beforeFreeze);
  });
});
