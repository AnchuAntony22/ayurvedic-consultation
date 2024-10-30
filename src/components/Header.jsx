import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher'; // Import the LanguageSwitcher component
import { useTranslation } from 'react-i18next';

const Header = () => {
  const mobileNavToggleBtnRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state to manage scroll
  const location = useLocation();
  const { t } = useTranslation();



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const mobileNavToggleBtn = mobileNavToggleBtnRef.current;

    const mobileNavToggle = () => {
      setIsNavOpen((prevState) => !prevState);
      document.body.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    };

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
    }

    return () => {
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
      }
    };
  }, []);

  useEffect(() => {
    const closeNavOnClickOutside = (e) => {
      if (!e.target.closest('.navmenu') && isNavOpen) {
        closeNavMenu();
      }
    };

    document.addEventListener('click', closeNavOnClickOutside);

    return () => {
      document.removeEventListener('click', closeNavOnClickOutside);
    };
  }, [isNavOpen]);

  const closeNavMenu = () => {
    setIsNavOpen(false);
    document.body.classList.remove('mobile-nav-active');
    mobileNavToggleBtnRef.current.classList.add('bi-list');
    mobileNavToggleBtnRef.current.classList.remove('bi-x');
  };

  return (
    <header id="header" className={`header d-flex align-items-center sticky-top ${isScrolled ? 'small-header' : ''}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src={`${process.env.PUBLIC_URL}/Active/assets/img/gelogo.png`} alt="Logo" className="header-logo" />
          <h1 className="sitename">Ayur Harmony Retreat</h1>
        </a>
        
        <nav id="navmenu" className={`navmenu ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeNavMenu}>{t('Home')}</Link></li>
            <li><Link to="/About" className={location.pathname === '/About' ? 'active' : ''} onClick={closeNavMenu}>{t('About Me')}</Link></li>
            <li><Link to="/Services" className={location.pathname === '/Services' ? 'active' : ''} onClick={closeNavMenu}>{t('Services')}</Link></li>
            <li><Link to="/Consultation-details" className={location.pathname === '/Consultation-details' ? 'active' : ''} onClick={closeNavMenu}>{t('Pricing Guide')}</Link></li>
            <li><Link to="/Testimonials" className={location.pathname === '/Testimonials' ? 'active' : ''} onClick={closeNavMenu}>{t('Testimonials')}</Link></li>
            <li><Link to="/Contact" className={location.pathname === '/Contact' ? 'active' : ''} onClick={closeNavMenu}>{t('Contact Us')}</Link></li>
          </ul>
          <i ref={mobileNavToggleBtnRef} className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <LanguageSwitcher /> {/* Include the LanguageSwitcher here */}
      </div>
    </header>
  );
};

export default Header;
