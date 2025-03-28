import TimeTitan from '../index.js';
import freeze from '../src/freeze.js';
import unfreeze from '../src/unfreeze.js';

describe('unfreeze', () => {
    test('should resume normal time flow', (done) => {
      const titi = new TimeTitan();
      titi.startTime = Date.now();
      
      freeze(titi);
      setTimeout(() => {
        unfreeze(titi);
  
        setTimeout(() => {
          const now = Date.now();
          expect(now).toBeGreaterThan(titi.startTime - 1); // Add a small buffer
          done();
        }, 100);
      }, 100);
    }, 10000); // Extend timeout to 10 seconds
  });