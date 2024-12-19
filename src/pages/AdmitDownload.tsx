import React from 'react';
import { FileDown, Clock, MapPin } from 'lucide-react';
import { admitCardData } from '../data/mockData';
import DownloadButton from '../components/shared/DownloadButton';

export default function AdmitDownload() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">Admit Card Download</h2>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="mb-6">
          <h3 className="text-base sm:text-xl font-semibold mb-4">{admitCardData.examName}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <Clock className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">Reporting Time: {admitCardData.reportingTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">Center: {admitCardData.examCenter}</span>
            </div>
          </div>
          
          <div className="mb-4 sm:mb-6">
            <h4 className="font-semibold mb-2 text-sm sm:text-base">Important Instructions:</h4>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2">
              {admitCardData.instructions.map((instruction, index) => (
                <li key={index} className="text-xs sm:text-sm text-gray-600">{instruction}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center">
            <DownloadButton
              onClick={() => console.log('Downloading admit card')}
              text="Download Admit Card"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}