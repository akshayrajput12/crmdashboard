import React from 'react';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  return (
    <button className="flex items-center gap-2 text-orange-500">
      <span className="hidden sm:inline">Logout</span>
      <LogOut size={20} />
    </button>
  );
}