# Time Titan

**Time manipulation library for JavaScript. Control and modify time effortlessly for testing, animations, or creative projects.**

## Installation
```sh
npm install time-titan
```

## Usage
```js
import TimeTitan from 'time-titan';

const titi = new TimeTitan();

// Freeze time
titi.freeze();

// Unfreeze time
titi.unfreeze();

// Set a specific timestamp
titi.setTime(1700000000000);

// Jump forward or backward in time
titi.warp(10000); // Move 10 seconds ahead

// Accelerate time (2x speed)
titi.accelerate(2);

// Decelerate time (0.5x speed, half-speed)
titi.decelerate(0.5);

// Reset time to normal behavior
titi.reset();

// Mock a specific date
titi.mockDate('2025-12-31T23:59:59Z');

// Pause and resume time
titi.pause();
titi.resume();

// Loop time between two timestamps
titi.loop(1700000000000, 1700000100000, 2);

// Save and restore time checkpoints
const checkpoint = titi.saveCheckpoint();
titi.restoreCheckpoint(checkpoint);
```

## API Reference

### `freeze()`
Stops time at the current moment, making `Date.now()` return the same value until unfreezed.

### `unfreeze()`
Resumes normal time flow.

### `setTime(timestamp)`
Overrides `Date.now()` with a fixed timestamp.

### `warp(milliseconds)`
Moves time forward or backward by the specified number of milliseconds.

### `accelerate(factor)`
Makes time run faster by a given multiplier (e.g., `2` makes time run twice as fast).

### `decelerate(factor)`
Slows down time by a given fraction (e.g., `0.5` makes time run at half speed).

### `reset()`
Restores `Date.now()` to its normal behavior.

### `mockDate(dateString)`
Overrides the system date completely to a specific value.

### `pause()`
Temporarily stops time.

### `resume()`
Resumes time from where it was paused.

### `loop(start, end, speed)`
Loops time between two points at a custom speed, useful for animations and simulations.

### `saveCheckpoint()`
Saves the current timestamp as a checkpoint.

### `restoreCheckpoint(checkpoint)`
Restores time to a previously saved checkpoint.
