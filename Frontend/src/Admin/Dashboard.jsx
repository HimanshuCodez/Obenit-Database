import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import SupportQueries from './components/SupportQueries';
import UserManagement from './components/UserManagement';
import DatabaseAccess from './components/DatabaseAccess';
import Domain from './Components/Domain';
import Header from '../components/Header';

const ObenitAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data and handlers
  const [supportQueries, setSupportQueries] = useState([
    { id: 1, user: 'John Doe', email: 'john@example.com', subject: 'Login Issues', status: 'pending', priority: 'high', date: '2025-09-10' },
    { id: 2, user: 'Jane Smith', email: 'jane@example.com', subject: 'Payment Problem', status: 'resolved', priority: 'medium', date: '2025-09-09' },
    { id: 3, user: 'Mike Johnson', email: 'mike@example.com', subject: 'Feature Request', status: 'in-progress', priority: 'low', date: '2025-09-08' }
  ]);
  
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user', status: 'active', joinDate: '2025-08-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'premium', status: 'active', joinDate: '2025-07-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'user', status: 'inactive', joinDate: '2025-06-10' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'admin', status: 'active', joinDate: '2025-05-01' }
  ]);

  const [dbAccess, setDbAccess] = useState([
    { id: 1, username: 'db_admin', role: 'full_access', lastAccess: '2025-09-12', status: 'active' },
    { id: 2, username: 'readonly_user', role: 'read_only', lastAccess: '2025-09-11', status: 'active' },
    { id: 3, username: 'backup_service', role: 'backup_only', lastAccess: '2025-09-10', status: 'active' }
  ]);

  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === 'active').length,
    pendingSupport: supportQueries.filter(q => q.status === 'pending').length,
    dbConnections: dbAccess.filter(d => d.status === 'active').length
  };

  const updateSupportStatus = (id, newStatus) => {
    setSupportQueries(prev => prev.map(query => query.id === id ? { ...query, status: newStatus } : query));
  };

  const toggleUserStatus = (userId) => {
    setUsers(prev => prev.map(user => user.id === userId ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' } : user));
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': 
        return <Overview stats={stats} supportQueries={supportQueries} dbAccess={dbAccess} />;
      case 'support': 
        return <SupportQueries supportQueries={supportQueries} updateSupportStatus={updateSupportStatus} />;
      case 'users': 
        return <UserManagement users={users} toggleUserStatus={toggleUserStatus} />;
      case 'database': 
        return <DatabaseAccess dbAccess={dbAccess} />;
      case 'domain': 
        return <Domain />;
      default: 
        return <Overview stats={stats} supportQueries={supportQueries} dbAccess={dbAccess} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            pendingSupportCount={stats.pendingSupport}
          />
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ObenitAdminDashboard;
