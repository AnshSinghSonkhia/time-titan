import freeze from './src/freeze.js';
import unfreeze from './src/unfreeze.js';
import setTime from './src/setTime.js';
import warp from './src/warp.js';
import accelerate from './src/accelerate.js';
import decelerate from './src/decelerate.js';
import reset from './src/reset.js';
import mockDate from './src/mockDate.js';
import pause from './src/pause.js';
import { resume, loop } from './src/resume.js';
import saveCheckpoint from './src/saveCheckpoint.js';
import restoreCheckpoint from './src/restoreCheckpoint.js';

class TimeTitan {
  constructor() {
    this.originalDateNow = Date.now;
    this.frozenTime = null;
    this.checkpoint = null;
    this.loopInterval = null;
    this.timeMultiplier = 1;
    this.startTime = Date.now();
  }

  freeze() {
    this.frozenTime = Date.now();
    Date.now = () => this.frozenTime;
  }

  unfreeze() {
    Date.now = this.originalDateNow;
    this.frozenTime = null;
  }

  setTime(timestamp) {
    Date.now = () => timestamp;
    this.startTime = timestamp;
  }

  warp(milliseconds) {
    Date.now = () => this.originalDateNow() + milliseconds;
  }

  accelerate(factor) {
    this.timeMultiplier = factor;
    const start = this.originalDateNow();
    Date.now = () => start + (this.originalDateNow() - start) * this.timeMultiplier;
  }

  decelerate(factor) {
    this.timeMultiplier = 1 / factor;
    const start = this.originalDateNow();
    Date.now = () => start + (this.originalDateNow() - start) * this.timeMultiplier;
  }

  reset() {
    Date.now = this.originalDateNow;
    this.timeMultiplier = 1;
  }

  mockDate(dateString) {
    const fixedDate = new Date(dateString).getTime();
    Date.now = () => fixedDate;
  }

  pause() {
    this.freeze();
  }

  resume() {
      this.unfreeze();
      this.startTime = Date.now();
  }

  loop(start, end, speed) {
    if (this.loopInterval) clearInterval(this.loopInterval);
    let current = start;
    const step = speed;

    this.loopInterval = setInterval(() => {
      current += step;
      if (current >= end) current = start;
      Date.now = () => current;
    }, 100);
  }

  saveCheckpoint() {
    this.checkpoint = Date.now();
    return this.checkpoint;
  }

  restoreCheckpoint() {
    if (this.checkpoint !== null) {
    //   Date.now = () => this.checkpoint;
    this.startTime = this.checkpoint;
    }
  }
}

export default TimeTitan;
