// src/App.jsx
import React from 'react';
import TeamSection from './Components/TeamSection';
import Footer from './Components/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-blue-900">
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;