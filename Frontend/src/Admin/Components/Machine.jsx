import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuthStore from '../../store/authStore';
import { toast } from 'react-toastify';

const DatabaseAccess = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [machineData, setMachineData] = useState({ cpuUsage: 0, memoryUsage: 0, storageUsage: 0 });
  const { token } = useAuthStore();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('https://obenit-database.onrender.com/auth/users-with-domains', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    if (token) {
      fetchUsers();
    }
  }, [token]);

  const handleUserSelect = async (userId) => {
    if (!userId) {
      setSelectedUser(null);
      setMachineData({ cpuUsage: 0, memoryUsage: 0, storageUsage: 0 });
      return;
    }
    const user = users.find(u => u._id === userId);
    setSelectedUser(user);
    try {
      const { data } = await axios.get(`https://obenit-database.onrender.com/api/machine?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMachineData(data);
    } catch (error) {
      // If no machine data exists, the getMachineData controller will create it.
      // So we need to re-fetch.
      try {
        const { data } = await axios.get(`https://obenit-database.onrender.com/api/machine?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMachineData(data);
      } catch (err) {
        console.error('Error fetching machine data after creation:', err);
      }
    }
  };

  const handleInputChange = (e) => {
    setMachineData({ ...machineData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedUser) {
      toast.error('Please select a user.');
      return;
    }

    try {
      await axios.post('https://obenit-database.onrender.com/api/machine', {
        userId: selectedUser._id,
        ...machineData,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Machine data updated successfully!');
    } catch (error) {
      console.error('Error updating machine data:', error);
      toast.error('Failed to update machine data.');
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <h2 className="text-2xl font-semibold leading-tight">Update Machine Data</h2>

        <div className="my-4">
          <label htmlFor="user-select" className="block text-sm font-medium text-gray-700">Select User</label>
          <select
            id="user-select"
            onChange={(e) => handleUserSelect(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">-- Select a user --</option>
            {users.map(user => (
              <option key={user._id} value={user._id}>{user.username} ({user.email})</option>
            ))}
          </select>
        </div>

        {selectedUser && (
          <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="cpuUsage" className="block text-sm font-medium text-gray-700">CPU Usage (%)</label>
                <input
                  type="number"
                  name="cpuUsage"
                  id="cpuUsage"
                  value={machineData.cpuUsage}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="memoryUsage" className="block text-sm font-medium text-gray-700">Memory Usage (%)</label>
                <input
                  type="number"
                  name="memoryUsage"
                  id="memoryUsage"
                  value={machineData.memoryUsage}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="storageUsage" className="block text-sm font-medium text-gray-700">Storage Usage (%)</label>
                <input
                  type="number"
                  name="storageUsage"
                  id="storageUsage"
                  value={machineData.storageUsage}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-6 text-right">
              <button
                type="submit"
                className="py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Update Data
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default DatabaseAccess;