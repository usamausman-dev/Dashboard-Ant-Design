import React from 'react';
import { Route, Routes } from 'react-router-dom'

import './App.css';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
    </div>
  );
}

export default App;
