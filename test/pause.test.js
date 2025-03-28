import TimeTitan from '../index.js';
import pause from '../src/pause.js';

describe('pause', () => {
  test('should stop time temporarily', () => {
    const titi = new TimeTitan();
    pause(titi);
    
    const beforePause = Date.now();
    setTimeout(() => {
      expect(Date.now()).toBe(beforePause);
    }, 100);
  });
});
