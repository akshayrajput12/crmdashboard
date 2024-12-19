import React from 'react';

export default function DateDisplay() {
  return (
    <span className="hidden md:inline">
      {new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}
    </span>
  );
}