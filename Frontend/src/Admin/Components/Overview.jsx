import React from 'react';
import StatCard from './StatCard';
import { Users, Activity, MessageSquare, Database } from 'lucide-react';

const Overview = ({ stats, supportQueries, dbAccess }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'pending': return 'bg-orange-100 text-orange-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value={stats.totalUsers} icon={Users} colorClass="text-blue-500" />
        <StatCard title="Active Users" value={stats.activeUsers} icon={Activity} colorClass="text-green-600" />
        <StatCard title="Pending Support" value={stats.pendingSupport} icon={MessageSquare} colorClass="text-orange-600" />
        <StatCard title="DB Connections" value={stats.dbConnections} icon={Database} colorClass="text-purple-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Support Queries</h3>
          <div className="space-y-3">
            {supportQueries.slice(0, 3).map(query => (
              <div key={query.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div>
                  <p className="font-medium text-gray-800">{query.subject}</p>
                  <p className="text-sm text-gray-600">{query.user}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(query.status)}`}>
                  {query.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Database Activity</h3>
          <div className="space-y-3">
            {dbAccess.slice(0, 3).map(access => (
              <div key={access.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div>
                  <p className="font-medium text-gray-800">{access.username}</p>
                  <p className="text-sm text-gray-600">{access.role.replace('_', ' ')}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Last: {access.lastAccess}</p>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {access.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
