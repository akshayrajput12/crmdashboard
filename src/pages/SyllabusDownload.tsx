import React from 'react';
import { FileText } from 'lucide-react';
import { syllabusData } from '../data/mockData';
import DownloadButton from '../components/shared/DownloadButton';
import Card from '../components/shared/Card';

export default function SyllabusDownload() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Syllabus Download</h2>
      <Card>
        <div className="grid gap-4">
          {syllabusData.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between p-4 border rounded-lg
                hover:border-blue-500 hover:shadow-md transition-all duration-200
                hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <FileText className="text-gray-400" size={24} />
                <div>
                  <h3 className="font-semibold">{item.subject}</h3>
                  <p className="text-sm text-gray-600">{item.semester}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Last updated: {item.lastUpdated}
                </span>
                <DownloadButton
                  onClick={() => console.log(`Downloading ${item.subject} syllabus`)}
                  text="Download"
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}