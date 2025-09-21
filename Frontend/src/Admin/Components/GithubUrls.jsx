import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GithubUrls() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.get('https://obenit-database.onrender.com/api/github', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repo data:', error);
      }
      setLoading(false);
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">GitHub Repositories</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    GitHub URL
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Private
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Environment Variables
                  </th>
                </tr>
              </thead>
              <tbody>
                {repos.map((repo) => (
                  <tr key={repo._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{repo.user?.username}</p>
                      <p className="text-gray-600 whitespace-no-wrap">{repo.user?.email}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <a href={repo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800">
                        {repo.githubUrl}
                      </a>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden="true"
                          className={`absolute inset-0 ${repo.isPrivate ? 'bg-red-200' : 'bg-green-200'} opacity-50 rounded-full`}>
                        </span>
                        <span className="relative">{repo.isPrivate ? 'Yes' : 'No'}</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <ul>
                        {repo.envVars.map((env, index) => (
                          <li key={index} className="text-gray-900 whitespace-no-wrap">
                            <strong>{env.key}:</strong> {env.value}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
