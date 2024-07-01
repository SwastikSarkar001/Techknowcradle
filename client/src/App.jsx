import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'

const HomePage = lazy(() => import('./components/HomePage'))
const Register = lazy(() => import('./components/Register'))
const RegisterSuccess = lazy(() => import('./components/RegisterSuccess'))

import './App.css';

export default function App() {

  // return(<LoadingScreen />)

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/register/success' element={<RegisterSuccess />} />
            <Route path='*' element={<Navigate to='/' />}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}