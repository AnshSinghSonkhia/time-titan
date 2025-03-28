import TimeTitan from '../index.js';
import mockDate from '../src/mockDate.js';

describe('mockDate', () => {
  test('should override the system date', () => {
    const titi = new TimeTitan();
    const fakeDate = "2025-01-01T00:00:00.000Z";

    mockDate(titi, fakeDate);

    expect(new Date().toISOString()).toBe(fakeDate);
    expect(Date.now()).toBe(new Date(fakeDate).getTime());
  });
});
