import React from 'react';
import { Award } from 'lucide-react';
import { resultData } from '../data/mockData';
import DownloadButton from '../components/shared/DownloadButton';

export default function ResultDownload() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Result Download</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        {resultData.map((semester, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{semester.semester}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">GPA: {semester.gpa}</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  semester.status === 'Passed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {semester.status}
                </span>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Subject</th>
                    <th className="px-4 py-2 text-left">Grade</th>
                    <th className="px-4 py-2 text-left">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {semester.subjects.map((subject, subIndex) => (
                    <tr key={subIndex} className="border-t">
                      <td className="px-4 py-2">{subject.name}</td>
                      <td className="px-4 py-2">{subject.grade}</td>
                      <td className="px-4 py-2">{subject.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 flex justify-end">
              <DownloadButton
                onClick={() => console.log(`Downloading ${semester.semester} result`)}
                text="Download Result"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}