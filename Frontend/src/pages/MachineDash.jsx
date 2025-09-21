import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import { Cpu, MemoryStick, HardDrive, Server, Wifi, Globe } from 'lucide-react';

const ProgressBar = ({ value, color }) => (
  <div className="w-full bg-gray-700 rounded-full h-2.5">
    <div className={`${color} h-2.5 rounded-full`} style={{ width: `${value}%` }}></div>
  </div>
);

const InfoField = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
    <div className="flex items-center">
      {icon}
      <span className="ml-4 text-gray-300">{label}</span>
    </div>
    <span className="font-mono text-green-400">{value}</span>
  </div>
);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="animate-pulse text-2xl font-bold">Loading Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Machine Dashboard</h1>
          <p className="text-center text-gray-400 mt-2">Welcome to your server management panel.</p>
        </header>

        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-100">System Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoField icon={<Server className="w-6 h-6 text-blue-400" />} label="Status" value={<span className="text-green-400 font-bold">Running</span>} />
              <InfoField icon={<Globe className="w-6 h-6 text-green-400" />} label="IP Address" value="192.168.1.101" />
              <InfoField icon={<Wifi className="w-6 h-6 text-yellow-400" />} label="Uptime" value="99.98%" />
              <InfoField icon={<Globe className="w-6 h-6 text-purple-400" />} label="Datacenter" value="Bangalore, IN" />
            </div>
          </div>

          <div className="p-8 border-t border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-gray-100">Resource Usage</h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Cpu className="w-6 h-6 text-blue-400" />
                    <span className="ml-3 text-lg">CPU Usage</span>
                  </div>
                  <span className="font-mono text-blue-400">{machineData?.cpuUsage}%</span>
                </div>
                <ProgressBar value={machineData?.cpuUsage} color="bg-blue-500" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <MemoryStick className="w-6 h-6 text-green-400" />
                    <span className="ml-3 text-lg">Memory Usage</span>
                  </div>
                  <span className="font-mono text-green-400">{machineData?.memoryUsage}%</span>
                </div>
                <ProgressBar value={machineData?.memoryUsage} color="bg-green-500" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <HardDrive className="w-6 h-6 text-yellow-400" />
                    <span className="ml-3 text-lg">Storage Usage</span>
                  </div>
                  <span className="font-mono text-yellow-400">{machineData?.storageUsage}%</span>
                </div>
                <ProgressBar value={machineData?.storageUsage} color="bg-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineDash;