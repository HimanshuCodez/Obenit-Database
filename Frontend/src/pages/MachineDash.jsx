import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Cpu, MemoryStick, HardDrive } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const MachineDash = () => {
  const [machineData, setMachineData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useAuthStore();

  useEffect(() => {
    const fetchMachineData = async () => {
      try {
        const { data } = await axios.get('https://obenit-database.onrender.com/api/machine', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMachineData(data);
      } catch (error) {
        console.error('Error fetching machine data:', error);
      }
      setLoading(false);
    };

    if (token) {
      fetchMachineData();
    }
  }, [token]);

  const data = [
    { name: 'CPU', usage: machineData?.cpuUsage, icon: <Cpu className="w-8 h-8 text-blue-400" /> },
    { name: 'Memory', usage: machineData?.memoryUsage, icon: <MemoryStick className="w-8 h-8 text-green-400" /> },
    { name: 'Storage', usage: machineData?.storageUsage, icon: <HardDrive className="w-8 h-8 text-yellow-400" /> },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="animate-pulse text-2xl font-bold">Loading Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Machine Dashboard</h1>
        <p className="text-center text-gray-400 mb-12">Real-time resource monitoring</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {data.map((item, index) => (
            <div key={item.name} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {item.icon}
                  <h2 className="text-2xl font-semibold ml-4">{item.name}</h2>
                </div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{item.usage}%</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-center">Resource Usage Overview</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563' }} />
              <Legend />
              <Bar dataKey="usage" fill="#8884d8">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MachineDash;
