// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Footer = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <footer id="footer" className="footer light-background">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3 mb-3 mb-md-0">
            <div className="widget">
              <h3 className="widget-heading">{t('About Us')}</h3>
              <p className="mb-4">{t('footer_about')}</p>
              <p className="mb-0">
                <Link to="/About" className="btn-learn-more">{t('About Me')}</Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 ps-lg-5 mb-3 mb-md-0">
            <div className="widget">
              <h3 className="widget-heading">{t('Navigation')}</h3>
              <ul className="list-unstyled float-start me-5">
                <li><Link to="/">{t('Home')}</Link></li>
                <li><Link to="/About">{t('About Me')}</Link></li>
                <li><Link to="/Services">{t('Services')}</Link></li>
              </ul>
              <ul className="list-unstyled float-start">
                <li><Link to="/Contact">{t('Contact Us')}</Link></li>
                <li><Link to="/Testimonials">{t('Testimonials')}</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pl-lg-5">
            <div className="widget">
              <h3 className="widget-heading">{t('Address')}</h3>
              <ul className="list-unstyled footer-blog-entry">
                <li>
                  <a href="https://maps.app.goo.gl/PyKXt1yMdZcVTjXG6">{t('Location')}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pl-lg-5">
            <div className="widget">
              <h3 className="widget-heading">{t('Connect Us')}</h3>
              <ul className="list-unstyled social-icons light mb-3">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61567778638786"><span className="bi bi-facebook"></span></a>
                </li>
                <li>
                  <a href="#"><span className="bi bi-instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span className="bi bi-linkedin"></span></a>
                </li>
              </ul>
              <div>
                <a href="/">
                <img
                  src={`${process.env.PUBLIC_URL}/Active/assets/img/logoo.png`}
                  alt="Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    maxWidth: '500px',
                  }}
                />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright d-flex flex-column flex-md-row align-items-center justify-content-md-between">
          <p>{t('Copyright')} <span><strong className="px-1 sitename">Active.</strong> {t('All Rights Reserved')}</span></p>
          <div className="credits">
            {t('Designed by')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
