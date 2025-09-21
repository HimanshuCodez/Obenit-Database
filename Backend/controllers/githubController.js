import GithubRepo from '../models/GithubRepo.js';

export const saveRepoInfo = async (req, res) => {
    const { githubUrl, isPrivate, envVars } = req.body;
    const userId = req.user.id;

    try {
        const newRepo = new GithubRepo({
            githubUrl,
            isPrivate,
            envVars,
            user: userId
        });

        const savedRepo = await newRepo.save();
        res.status(201).json(savedRepo);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getRepoInfo = async (req, res) => {
    try {
        const repos = await GithubRepo.find().populate('user', 'username email');
        res.status(200).json(repos);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};