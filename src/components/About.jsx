// src/components/About.js

import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'aos/dist/aos.css';

const About = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <section id="about-2" className="about-2 section">
      <div className="container">
        <div className="content">
          <div className="row gy-4 justify-content-center align-items-center">
            <div className="col-lg-5">
              <div className="images-overlap">
                <img src={`${process.env.PUBLIC_URL}/Active/assets/img/team/shyma.jpg`} alt="student" className="img-fluid img-1" data-aos="fade-up" />
              </div>
            </div>
            <div className="offset-md-0 offset-lg-1 col-sm-12 col-md-5 col-lg-5 col-xl-4" data-aos="fade-up">
              <div className="px-3">
                <h2 className="content-title text-center">{t('About Me')}</h2>
                <h1 className="content-title text-center mb-1">
                  {t('Dr. Shyma K. Jacob, BAMS')}
                </h1>
                <h1 className="content-subtitle text-center mt-1">
                  {t('Ayurvedic Doctor & Certified Yoga Instructor')}
                </h1>
                <p className="mb-3 justify-text">
                  {t('welcome_message')}
                </p>
                <p className="mb-3 justify-text">
                  {t('experience')}
                </p>
                <p className="mb-3 justify-text">
                  {t('expertise')}
                </p>
                <p className="mb-3 justify-text">
                  {t('holistic_healing')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
