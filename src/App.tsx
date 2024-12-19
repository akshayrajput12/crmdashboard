import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import StudentProfile from './pages/StudentProfile';
import SyllabusDownload from './pages/SyllabusDownload';
import StudyMaterial from './pages/StudyMaterial';
import AdmitDownload from './pages/AdmitDownload';
import ResultDownload from './pages/ResultDownload';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<StudentProfile />} />
              <Route path="/syllabus" element={<SyllabusDownload />} />
              <Route path="/study-material" element={<StudyMaterial />} />
              <Route path="/admit" element={<AdmitDownload />} />
              <Route path="/result" element={<ResultDownload />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;