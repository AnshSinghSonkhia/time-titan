import TimeTitan from '../index.js';
import accelerate from '../src/accelerate.js';

describe('accelerate', () => {
  test('should make time run faster', (done) => {
    const titi = new TimeTitan();
    accelerate(titi, 2);

    setTimeout(() => {
      expect(Date.now()).toBeGreaterThan(titi.startTime + 200);
      done();
    }, 100);
  });
});
