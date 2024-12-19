import React from 'react';
import { Award } from 'lucide-react';
import { resultData } from '../data/mockData';
import DownloadButton from '../components/shared/DownloadButton';

export default function ResultDownload() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">Result Download</h2>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        {resultData.map((semester, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h3 className="text-base sm:text-xl font-semibold text-center sm:text-left mb-2 sm:mb-0">
                {semester.semester}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-semibold">GPA: {semester.gpa}</span>
                <span 
                  className={`px-2 py-1 rounded text-xs sm:text-sm ${
                    semester.status === 'Passed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                  }`}
                >
                  {semester.status}
                </span>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-2 sm:px-4 py-2 text-left">Subject</th>
                    <th className="px-2 sm:px-4 py-2 text-left">Grade</th>
                    <th className="px-2 sm:px-4 py-2 text-left">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {semester.subjects.map((subject, subIndex) => (
                    <tr key={subIndex} className="border-t">
                      <td className="px-2 sm:px-4 py-2">{subject.name}</td>
                      <td className="px-2 sm:px-4 py-2">{subject.grade}</td>
                      <td className="px-2 sm:px-4 py-2">{subject.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 flex justify-center sm:justify-end">
              <DownloadButton
                onClick={() => console.log(`Downloading ${semester.semester} result`)}
                text="Download Result"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}