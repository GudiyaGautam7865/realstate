import React from 'react';
import './App.css';
import Footer from './components/home/footer/Footer';
import Headers from './components/home/header/Headers';
import { Route, Routes } from 'react-router-dom';
import HomePages from './pages/Homepages';
import Properties from './pages/Properties';
import SingleProperty from './pages/SingleProperty';
import Contact from './pages/ContactUs';
import About from './pages/About'; // <-- Missing import added
import Login from './pages/Login';
function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/allproperty" element={<Properties />} />
        <Route path="/property/:id" element={<SingleProperty />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
