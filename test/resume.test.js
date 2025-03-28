import TimeTitan from '../index.js';
import {resume, loop} from '../src/resume.js';

test('should resume paused time', (done) => {
  const titi = new TimeTitan();
  titi.resume(); // Ensure startTime is set

  setTimeout(() => {
    console.log('startTime:', titi.startTime); // Debugging
    expect(typeof titi.startTime).toBe('number'); // Ensure it's defined and a number
    expect(Date.now()).toBeGreaterThan(titi.startTime);
    done();
  }, 100);
});
