import React from 'react';

const StatCard = ({ title, value, icon: Icon, colorClass }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border transform hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
        </div>
        <Icon className={`h-12 w-12 ${colorClass}`} />
      </div>
    </div>
  );
};

export default StatCard;
