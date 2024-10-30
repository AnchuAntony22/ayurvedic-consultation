import React, { useEffect } from 'react'; // Import React and useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Testimonials1 from './components/Testimonials1';
import Services from './components/Services';
import { AuthProvider } from './AuthContext';
import Contact from './components/Contact';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
import './components/i18n';
import ConsultationDetails from './components/ConsultationDetails';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []); // Empty dependency array to run once on mount

  return (
    <AuthProvider> {/* Wrap the whole Router in AuthProvider */}
      <Router>
        <ScrollToTop /> {/* Ensures page scrolls to top on route change */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Testimonials1" element={<Testimonials1 />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Consultation-details" element={<ConsultationDetails />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
