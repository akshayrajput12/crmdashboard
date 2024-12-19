import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<StudentDashboard />} />
        <Route path="/" element={<Navigate to="/dashboard/profile" replace />} />
      </Routes>
    </Router>
  );
}

export default App;