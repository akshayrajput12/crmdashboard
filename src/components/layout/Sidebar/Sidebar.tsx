import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UserCircle, FileText, Download, Award, Menu } from 'lucide-react';
import ProfileSection from './ProfileSection';
import NavigationItem from './NavigationItem';

const navItems = [
  { icon: UserCircle, text: 'Student Profile', path: '/' },
  { icon: FileText, text: 'Syllabus Download', path: '/syllabus' },
  { icon: FileText, text: 'Study Material Download', path: '/study-material' },
  { icon: Download, text: 'Admit Download', path: '/admit' },
  { icon: Award, text: 'Result Download', path: '/result' }
];

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 text-orange-500"
      >
        <Menu size={24} />
      </button>
      
      <div className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 fixed md:static w-64 bg-navy-900 min-h-screen text-white p-4 z-40`}>
        <ProfileSection />
        <nav>
          {navItems.map((item, index) => (
            <NavigationItem
              key={index}
              icon={item.icon}
              text={item.text}
              path={item.path}
              isActive={location.pathname === item.path}
            />
          ))}
        </nav>
      </div>
    </>
  );
}