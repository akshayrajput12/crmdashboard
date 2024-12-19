import React from 'react';
import { BookOpen } from 'lucide-react';
import { studyMaterialData } from '../data/mockData';
import DownloadButton from '../components/shared/DownloadButton';

export default function StudyMaterial() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">Study Material Download</h2>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="grid gap-3 sm:gap-4">
          {studyMaterialData.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 border rounded-lg
                hover:border-blue-500 hover:shadow-md transition-all duration-200
                hover:-translate-y-0.5 space-y-3 sm:space-y-0"
            >
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <BookOpen className="text-gray-400 hidden sm:block" size={24} />
                <div className="text-center sm:text-left w-full">
                  <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.type} • {item.size}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <span className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                  Uploaded: {item.uploadDate}
                </span>
                <DownloadButton
                  onClick={() => console.log(`Downloading ${item.title}`)}
                  text="Download"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}