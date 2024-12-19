import React from 'react';
import { UserCircle, FileText, Download, Award } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { icon: UserCircle, text: 'Student Profile', path: '/' },
    { icon: FileText, text: 'Syllabus Download', path: '/syllabus' },
    { icon: FileText, text: 'Study Material Download', path: '/study-material' },
    { icon: Download, text: 'Admit Download', path: '/admit' },
    { icon: Award, text: 'Result Download', path: '/result' }
  ];

  return (
    <div className="w-64 bg-navy-900 min-h-screen text-white p-4">
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold">ALMINA AHAMED</h2>
      </div>
      
      <nav>
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-blue-800 transition-colors ${
                location.pathname === item.path ? 'bg-blue-800' : ''
              }`}
            >
              <Icon size={20} />
              <span>{item.text}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}