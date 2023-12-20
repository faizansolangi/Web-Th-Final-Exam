import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Section2 from './components/Section2';
import Future from './components/Future';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Section2 />
      <Future />
      <Footer />
    </div>
  );
}

export default App;
