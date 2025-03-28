import { jest } from '@jest/globals';
import TimeTitan from '../index.js';
import saveCheckpoint from '../src/saveCheckpoint.js';

/* eslint-env jest */

describe('saveCheckpoint', () => {
  test('should save the current timestamp', () => {
    const titi = new TimeTitan();
    const mockTimestamp = 1672531200000; // Fixed timestamp

    jest.spyOn(Date, 'now').mockReturnValue(mockTimestamp);

    const checkpoint = saveCheckpoint(titi);

    expect(checkpoint).toBe(mockTimestamp); // Compare with mockTimestamp

    jest.restoreAllMocks(); // Restore Date.now()
  });
});
