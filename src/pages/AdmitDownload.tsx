import React from 'react';
import { FileDown, Clock, MapPin } from 'lucide-react';
import { admitCardData } from '../data/mockData';
import DownloadButton from '../components/shared/DownloadButton';

export default function AdmitDownload() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Admit Card Download</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">{admitCardData.examName}</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="text-gray-400" />
              <span>Reporting Time: {admitCardData.reportingTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-gray-400" />
              <span>Center: {admitCardData.examCenter}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Important Instructions:</h4>
            <ul className="list-disc list-inside space-y-2">
              {admitCardData.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-600">{instruction}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center">
            <DownloadButton
              onClick={() => console.log('Downloading admit card')}
              text="Download Admit Card"
            />
          </div>
        </div>
      </div>
    </div>
  );
}