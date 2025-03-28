import TimeTitan from '../index.js';
import loop from '../src/loop.js';

describe('loop', () => {
  test('should loop time between start and end', (done) => {
    const titi = new TimeTitan();
    loop(titi, 1000, 5000, 2);

    setTimeout(() => {
      const now = Date.now();
      expect(now).toBeGreaterThanOrEqual(1000);
      expect(now).toBeLessThanOrEqual(5000);
      done();
    }, 200);
  });
});
