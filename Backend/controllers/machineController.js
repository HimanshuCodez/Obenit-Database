import Machine from '../models/Machine.js';

export const getMachineData = async (req, res) => {
    try {
        const userId = req.query.userId || req.user._id;
        let machine = await Machine.findOne({ user: userId });

        if (!machine) {
            machine = await Machine.create({ user: userId });
        }

        res.status(200).json(machine);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateMachineData = async (req, res) => {
    const { userId, cpuUsage, memoryUsage, storageUsage } = req.body;

    try {
        // For now, we'll assume any authenticated user can update.
        // In a real app, you'd have admin role checks here.
        let machine = await Machine.findOne({ user: userId });

        if (!machine) {
            machine = await Machine.create({ user: userId, cpuUsage, memoryUsage, storageUsage });
        } else {
            machine.cpuUsage = cpuUsage;
            machine.memoryUsage = memoryUsage;
            machine.storageUsage = storageUsage;
            await machine.save();
        }

        res.status(200).json(machine);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
