import mongoose from 'mongoose';

const githubRepoSchema = new mongoose.Schema({
    githubUrl: { type: String, required: true },
    isPrivate: { type: Boolean, required: true },
    envVars: [{
        key: { type: String },
        value: { type: String }
    }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

export default mongoose.model('GithubRepo', githubRepoSchema);