import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import StudentProfile from './StudentProfile';
import SyllabusDownload from './SyllabusDownload';
import StudyMaterial from './StudyMaterial';
import AdmitDownload from './AdmitDownload';
import ResultDownload from './ResultDownload';

const StudentDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col md:flex-row">
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? '✕' : '☰'}
        </button>

        {/* Sidebar - Mobile and Desktop Responsive */}
        <div className={`
          fixed inset-y-0 left-0 transform 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0
          w-64 bg-blue-500 text-white 
          transition-transform duration-300 ease-in-out
          z-40 md:z-0
        `}>
          <div className="p-6 bg-blue-600 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" 
                alt="Almina Ahamed" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-center">ALMINA AHAMED</h2>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="profile" 
                  className={({ isActive }) => 
                    `block py-2 px-4 rounded ${
                      isActive 
                      ? 'bg-white text-blue-500' 
                      : 'hover:bg-blue-400 hover:bg-opacity-50'
                    }`
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Student Profile
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="syllabus" 
                  className={({ isActive }) => 
                    `block py-2 px-4 rounded ${
                      isActive 
                      ? 'bg-white text-blue-500' 
                      : 'hover:bg-blue-400 hover:bg-opacity-50'
                    }`
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Syllabus Download
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="study-material" 
                  className={({ isActive }) => 
                    `block py-2 px-4 rounded ${
                      isActive 
                      ? 'bg-white text-blue-500' 
                      : 'hover:bg-blue-400 hover:bg-opacity-50'
                    }`
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Study Material Download
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="admit" 
                  className={({ isActive }) => 
                    `block py-2 px-4 rounded ${
                      isActive 
                      ? 'bg-white text-blue-500' 
                      : 'hover:bg-blue-400 hover:bg-opacity-50'
                    }`
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Admit Download
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="result" 
                  className={({ isActive }) => 
                    `block py-2 px-4 rounded ${
                      isActive 
                      ? 'bg-white text-blue-500' 
                      : 'hover:bg-blue-400 hover:bg-opacity-50'
                    }`
                  }
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Result Download
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content Area - Responsive */}
        <main className="flex-1 p-4 md:ml-0 transition-all duration-300">
          <Routes>
            <Route path="profile" element={<StudentProfile />} />
            <Route path="syllabus" element={<SyllabusDownload />} />
            <Route path="study-material" element={<StudyMaterial />} />
            <Route path="admit" element={<AdmitDownload />} />
            <Route path="result" element={<ResultDownload />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
