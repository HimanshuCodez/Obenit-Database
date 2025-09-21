import React from 'react';
import { Activity, MessageSquare, Users, Database, Globe, Github } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, pendingSupportCount }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'support', label: 'Support Queries', icon: MessageSquare, badge: pendingSupportCount },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'database', label: 'Database Access', icon: Database },
    { id: 'domain', label: 'Domains', icon: Globe },
    { id: 'github', label: 'GitHub', icon: Github },
  ];

  return (
    <aside className="lg:w-64 flex-shrink-0">
      <nav className="bg-white rounded-lg shadow-sm border p-4">
        <ul className="space-y-2">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
                {item.badge > 0 && (
                  <span className="ml-auto bg-orange-100 text-orange-800 text-xs font-medium rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
