import React from 'react';
import './App.scss';
import TipCalculator from './pages/TipCalculator';
import Logo from './components/Logo/Logo';

const App = () => (
  <div className="app">
    <Logo />
    <TipCalculator />
  </div>
);

export default App;
