import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Main from './pages/Main';

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
  
  
}

export default App;
