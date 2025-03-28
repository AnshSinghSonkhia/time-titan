export default function saveCheckpoint(instance) {
    instance.checkpoint = Date.now();
    return instance.checkpoint; // Ensure it returns the timestamp
}