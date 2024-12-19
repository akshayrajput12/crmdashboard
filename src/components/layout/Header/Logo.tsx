import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src="/dbos-logo.png" alt="DBOS Logo" className="h-12" />
      <div>
        <h1 className="text-xl font-bold text-orange-500">Dihing Board of</h1>
        <h2 className="text-lg text-orange-500">Open Schooling</h2>
      </div>
    </div>
  );
}