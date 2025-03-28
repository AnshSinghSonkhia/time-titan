export default function decelerate(instance, factor) {
    if (factor <= 0) {
        throw new Error("Factor must be greater than 0");
    }

    instance.timeFactor = factor;

    // Mocking time progression
    const realNow = Date.now.bind(Date);
    globalThis.Date.now = function () {
        return instance.startTime + (realNow() - instance.startTime) * factor;
    };
}