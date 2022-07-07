import React from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detailspage from './Components/Detailspage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Detailspage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
