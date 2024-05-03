import React from 'react';
import Navbar from './components/nav';
  

function App() {
  return (
    <div>
            <Navbar />
      <div className="container">
        <div className="card">
          <p className="title">Rick Sanchez</p>
        </div>
        <div className="card">
          <p className="title">Morty Smith</p>
        </div>
        <div className="card">
          <p className="title">Summer Smith</p>
        </div>
        <div className="card">
          <p className="title">Beth Smith</p>
        </div>
      </div>
    </div>
  );
}

export default App;
