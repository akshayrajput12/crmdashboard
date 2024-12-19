import React from 'react';
import { BookOpen } from 'lucide-react';
import { studyMaterialData } from '../data/mockData';
import DownloadButton from '../components/shared/DownloadButton';

export default function StudyMaterial() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Study Material Download</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid gap-4">
          {studyMaterialData.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <BookOpen className="text-gray-400" size={24} />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.type} • {item.size}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Uploaded: {item.uploadDate}
                </span>
                <DownloadButton
                  onClick={() => console.log(`Downloading ${item.title}`)}
                  text="Download"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}