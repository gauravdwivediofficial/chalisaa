import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './components/Header';
import HanumanChalisa from './components/HanumanChalisa';
import Astak from './components/Astak'
import Baan from './components/Baan'
import Aarti from './components/Aarti'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
          <Route path='/' exact element={<HanumanChalisa/>} />
          <Route path='/astak' exact element={<Astak/>} />
          <Route path='/baan' exact element={<Baan/>} />
          <Route path='/arti' exact element={<Aarti/>} />
      </Routes>
    </div>
    </Router>
  ); 
}

export default App;
