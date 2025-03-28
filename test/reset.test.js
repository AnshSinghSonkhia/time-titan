import TimeTitan from '../index.js';
import reset from '../src/reset.js';

describe('reset', () => {
  test('should restore Date.now() to normal behavior', () => {
    const titi = new TimeTitan();
    reset(titi);

    expect(Date.now()).toBeCloseTo(new Date().getTime(), -2);
  });
});
