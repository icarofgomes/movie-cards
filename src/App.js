import React from 'react';
import { Router, Header } from './components';

function App() {
  return (
    <div className="bg-gray-800 text-white h-screen md:pb-4">
      <Header />
      <Router />
    </div>
  );
}

export default App;
