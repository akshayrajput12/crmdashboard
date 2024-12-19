import React from 'react';
import ProfileImage from '../../shared/ProfileImage';

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-24 md:w-32 h-24 md:h-32 rounded-full overflow-hidden mb-4">
        <ProfileImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-lg md:text-xl font-semibold text-center text-white">ALMINA AHAMED</h2>
    </div>
  );
}