import { jest } from '@jest/globals';
import TimeTitan from '../index.js';
import saveCheckpoint from '../src/saveCheckpoint.js';
import restoreCheckpoint from '../src/restoreCheckpoint.js';

/* eslint-env jest */

describe('restoreCheckpoint', () => {
  test('should restore the saved timestamp', () => {
    const titi = new TimeTitan();
    const mockTimestamp = 1672531200000; // Fixed timestamp

    jest.spyOn(Date, 'now').mockReturnValue(mockTimestamp);

    const checkpoint = saveCheckpoint(titi);

    restoreCheckpoint(titi, checkpoint); // Pass checkpoint explicitly

    expect(titi.startTime).toBe(mockTimestamp); // Check correct restoration

    jest.restoreAllMocks(); // Restore original Date.now()
  });
});

