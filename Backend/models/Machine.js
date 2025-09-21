import mongoose from 'mongoose';

const machineSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    cpuUsage: {
        type: Number,
        default: 20,
    },
    memoryUsage: {
        type: Number,
        default: 40,
    },
    storageUsage: {
        type: Number,
        default: 60,
    },
});

export default mongoose.model('Machine', machineSchema);
