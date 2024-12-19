import React, { useState } from 'react';
import ImageViewer from './ImageViewer';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProfileImage({ src, alt, className = '' }: ProfileImageProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
        onClick={() => setIsViewerOpen(true)}
      />
      {isViewerOpen && (
        <ImageViewer
          src={src}
          alt={alt}
          onClose={() => setIsViewerOpen(false)}
        />
      )}
    </>
  );
}