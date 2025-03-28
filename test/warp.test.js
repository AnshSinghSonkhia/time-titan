import TimeTitan from '../index.js';
import warp from '../src/warp.js';

describe('warp', () => {
  test('should jump forward in time', () => {
    const titi = new TimeTitan();
    const beforeWarp = Date.now();

    warp(titi, 5000); // Jump forward 5 seconds

    expect(Math.abs(Date.now() - (beforeWarp + 5000))).toBeLessThanOrEqual(10);
  });

  test('should jump backward in time', () => {
    const titi = new TimeTitan();
    const beforeWarp = Date.now();

    warp(titi, -5000); // Jump backward 5 seconds

    expect(Math.abs(Date.now() - (beforeWarp - 5000))).toBeLessThanOrEqual(10);
  });
});
