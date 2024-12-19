import React from 'react';
import { LogOut } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/dbos-logo.png" alt="DBOS Logo" className="h-12" />
        <div>
          <h1 className="text-xl font-bold text-orange-500">Dihing Board of</h1>
          <h2 className="text-lg text-orange-500">Open Schooling</h2>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <span>{new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</span>
        <button className="flex items-center gap-2 text-orange-500">
          <span>Logout</span>
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
}