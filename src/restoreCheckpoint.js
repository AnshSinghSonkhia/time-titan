export default function restoreCheckpoint(instance, checkpoint) {
    if (checkpoint !== undefined && checkpoint !== null) {
        instance.startTime = checkpoint; // Properly restore the checkpoint
    }
}
