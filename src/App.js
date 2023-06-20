import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LandingNav from './components/LandingNav';
import LandingPage from './components/LandingPage';
import ExercisePlans from './pages/ExercisePlans';
import CreateWorkout from './pages/CreateWorkout';

function App() {
  const user = true;

  return (
    <div className="App">
      {user ? (
        <Nav />
      ) : (
        <LandingNav />
      )}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/exercise-plans' element={<ExercisePlans />} />
        <Route path='/create-workout' element={<CreateWorkout />} />
      </Routes>
    </div>
  );
}

export default App;
