import TimeTitan from '../index.js';
import setTime from '../src/setTime.js';

describe('setTime', () => {
  test('should set Date.now() to a fixed timestamp', () => {
    const titi = new TimeTitan();
    const fixedTime = 1700000000000;

    setTime(titi, fixedTime);

    expect(Date.now()).toBe(fixedTime);
  });
});
