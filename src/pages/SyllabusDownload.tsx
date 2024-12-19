import React from 'react';
import { FileText } from 'lucide-react';
import { syllabusData } from '../data/mockData';
import DownloadButton from '../components/shared/DownloadButton';
import Card from '../components/shared/Card';

export default function SyllabusDownload() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">Syllabus Download</h2>
      </div>

      <Card>
        <div className="grid gap-3 sm:gap-4">
          {syllabusData.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 border rounded-lg
                hover:border-blue-500 hover:shadow-md transition-all duration-200
                hover:-translate-y-0.5 space-y-3 sm:space-y-0"
            >
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <FileText className="text-gray-400 hidden sm:block" size={24} />
                <div className="text-center sm:text-left w-full">
                  <h3 className="font-semibold text-sm sm:text-base">{item.subject}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.semester}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <span className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                  Last updated: {item.lastUpdated}
                </span>
                <DownloadButton
                  onClick={() => console.log(`Downloading ${item.subject} syllabus`)}
                  text="Download"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}