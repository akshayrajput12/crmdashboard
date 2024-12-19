import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  onClick: () => void;
  text: string;
}

export default function DownloadButton({ onClick, text }: DownloadButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg
        transition-all duration-200
        hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5
        active:translate-y-0 active:shadow-md"
    >
      <Download size={20} className="transition-transform group-hover:scale-110" />
      <span>{text}</span>
    </button>
  );
}