import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavigationItemProps {
  icon: LucideIcon;
  text: string;
  path: string;
  isActive: boolean;
}

export default function NavigationItem({ icon: Icon, text, path, isActive }: NavigationItemProps) {
  return (
    <Link
      to={path}
      className={`flex items-center gap-3 p-3 rounded-lg mb-2 
        transition-all duration-200
        hover:bg-blue-800 hover:translate-x-1
        ${isActive ? 'bg-blue-800' : ''}
      `}
    >
      <Icon size={20} className="transition-transform group-hover:scale-110" />
      <span className="hidden md:inline">{text}</span>
    </Link>
  );
}