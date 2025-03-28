export default function unfreeze(instance) {
    if (!instance.frozen) return;

    instance.frozen = false;
    const frozenTime = instance.startTime; // Capture frozen time
    instance.unfreezeTime = performance.now(); // Set unfreezeTime before overriding Date.now

    // Restore Date.now() to real behavior
    globalThis.Date.now = function () {
        return frozenTime + (performance.now() - instance.unfreezeTime);
    };
}
