import React from 'react';
import Logo from './Logo';
import DateDisplay from './DateDisplay';
import LogoutButton from './LogoutButton';

export default function Header() {
  return (
    <div className="bg-white shadow-sm p-4 flex justify-between items-center">
      <Logo />
      <div className="flex items-center gap-4">
        <DateDisplay />
        <LogoutButton />
      </div>
    </div>
  );
}