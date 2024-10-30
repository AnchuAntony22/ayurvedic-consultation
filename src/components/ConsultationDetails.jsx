import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'aos/dist/aos.css';


const ConsultationDetails = () => {
  const { t } = useTranslation(); // Use translation hook

  const consultationDetails = t('consultation.consultations', { returnObjects: true });

  return (
    <section className="consultation-details">
      <h2>{t('consultation.title')}</h2> {/* Use translation for title */}
      <div className="consultation-list">
        {consultationDetails.map((consultation, index) => (
          <div key={index} className="consultation-item">
            <h3>{consultation.title}</h3>
            <ul>
              {consultation.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            <p className="price">Price: {consultation.price}</p>
            <Link 
              to="/Contact" 
              className="btn btn-get-started" 
              style={{ marginRight: '10px', backgroundColor: 'green', color: 'white' }}>
              {t('consultation.bookNow')} {/* Use translation for button text */}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultationDetails;
