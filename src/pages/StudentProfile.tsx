import React from 'react';
import Card from '../components/shared/Card';
import ProfileImage from '../components/shared/ProfileImage';

export default function StudentProfile() {
  const studentData = {
    formNo: '333914',
    admissionYear: '2023',
    registrationNo: '23910293948',
    faculty: 'Faculty of Commerce and Management',
    courseType: 'Post Graduate',
    courseName: 'MBA (Banking and Finance)',
    name: 'SHARANJEET SINGH',
    fatherName: 'PARMINDER SINGH',
    gender: 'Male',
    category: 'General',
    dateOfBirth: '2002-06-30',
    nationality: 'Indian'
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">Student Profile</h2>
        <span className="text-gray-500 text-sm sm:text-base">/ CMS Student Profile</span>
      </div>

      <Card>
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">STUDENT PROFILE</h3>
        
        <div className="border rounded-lg p-4 sm:p-6 hover:border-blue-500 transition-colors">
          <h4 className="text-base sm:text-lg font-semibold mb-4">COURSE/PROGRAME DETAILS :</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-4">
              {Object.entries({
                'Form No.': studentData.formNo,
                'Admission Year': studentData.admissionYear,
                'Registration No.': studentData.registrationNo,
                'Course Type': studentData.courseType
              }).map(([key, value]) => (
                <div 
                  key={key} 
                  className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span className="text-gray-600 text-sm sm:text-base">{key}</span>
                  <span className="font-medium text-sm sm:text-base">{value}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center sm:justify-end mt-4 sm:mt-0">
              <ProfileImage
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150"
                alt="Student"
                className="w-24 h-32 sm:w-32 sm:h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <h4 className="text-base sm:text-lg font-semibold mt-6 mb-4">PERSONAL DETAILS</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
            {Object.entries(studentData).map(([key, value]) => (
              <div 
                key={key} 
                className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span className="text-gray-600 text-sm sm:text-base">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <span className="font-medium text-sm sm:text-base">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}