import TimeTitan from '../index.js';
import decelerate from '../src/decelerate.js';

describe('decelerate', () => {
    test('should slow down time', (done) => {
      const titi = new TimeTitan();
      titi.startTime = Date.now(); // Store start time
      decelerate(titi, 0.5); // Slow time by 50%
  
      setTimeout(() => {
        const elapsedTime = Date.now() - titi.startTime;
        expect(elapsedTime).toBeLessThan(150); // Expect slower time progression
        done();
      }, 200);
    }, 10000); // Extend timeout to 10 seconds
  });
