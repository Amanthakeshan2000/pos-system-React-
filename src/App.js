import React from 'react';
import HomePage from './pages/HomePage';
import '../src/components/styles.css';

function App() {
  return (
    <>
      <div style={{
        width: "100%",
        height: "6px",
        background: "#145c2c",
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
