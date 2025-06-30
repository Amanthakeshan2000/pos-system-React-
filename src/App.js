import React from 'react';
import HomePage from './pages/HomePage';
import '../src/components/styles.css';

function App() {
  return (
    <>
      <div style={{
        marginTop: "5px",
        width: "100%",
        height: "6px",
        background: "#28a745",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000
      }}></div>
      <div className="App">
        <HomePage />
      </div>
    </>
  );
}

export default App;
