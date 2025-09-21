import React, { useState } from 'react';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Content() {
  const [githubUrl, setGithubUrl] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [envVars, setEnvVars] = useState([{ key: '', value: '' }]);
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleAddEnvVar = () => {
    setEnvVars([...envVars, { key: '', value: '' }]);
  };

  const handleEnvVarChange = (index, field, value) => {
    const newEnvVars = [...envVars];
    newEnvVars[index][field] = value;
    setEnvVars(newEnvVars);
  };

  const handleRemoveEnvVar = (index) => {
    const newEnvVars = [...envVars];
    newEnvVars.splice(index, 1);
    setEnvVars(newEnvVars);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      // Handle case where user is not authenticated
      return;
    }

    try {
      await axios.post(
        'https://obenit-database.onrender.com/api/github',
        {
          githubUrl,
          isPrivate,
          envVars,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('Deployment information saved successfully!');
      navigate('/machine-dash');
    } catch (error) {
      console.error('Error saving deployment information:', error);
      toast.error('Failed to save deployment information.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Deploy Your Application
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="githubUrl"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              GitHub Repository URL
            </label>
            <input
              type="url"
              id="githubUrl"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="https://github.com/user/repo.git"
              required
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={(e) => setIsPrivate(e.target.checked)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="ml-2 text-gray-700">
                Use a private repository
              </span>
            </label>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Environment Variables
            </h2>
            {envVars.map((envVar, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <input
                  type="text"
                  value={envVar.key}
                  onChange={(e) =>
                    handleEnvVarChange(index, 'key', e.target.value)
                  }
                  className="block w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Variable Name"
                />
                <input
                  type="text"
                  value={envVar.value}
                  onChange={(e) =>
                    handleEnvVarChange(index, 'value', e.target.value)
                  }
                  className="block w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Variable Value"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveEnvVar(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddEnvVar}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              + Add another variable
            </button>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full max-w-xs py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Deploy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
