import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './components/HomePage'
import Register from './components/Register'
import RegisterSuccess from './components/RegisterSuccess';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/register/success' element={<RegisterSuccess />} />
          <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
