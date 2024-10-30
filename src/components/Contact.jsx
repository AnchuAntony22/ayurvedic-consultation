import React from 'react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'aos/dist/aos.css';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;

    const recipient = 'info@ayurharmonyretreat.se';
    const subject = t('contact.subject') + ': ' + form.subject.value;
    const message = `
      Name: ${form.name.value}
      Email: ${form.email.value}
      Subject: ${subject}
      Message: ${form.message.value}
    `;

    const encodedMessage = encodeURIComponent(message);
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${encodedMessage}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact section vh-100 d-flex justify-content-center align-items-center">
      <div className="contact-container" data-aos="fade">
        <div className="info mb-4">
          <h3>{t('contact.getInTouch')}</h3>
          <p>{t('contact.weLoveToHear')}</p>

          <div className="info-item d-flex mb-3">
            <i className="bi bi-geo-alt me-2"></i>
            <div>
              <h4>{t('contact.location')}</h4>
              <p>
                <a
                  href="https://maps.app.goo.gl/PyKXt1yMdZcVTjXG6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AHN Kiropraktorerna, Söndrumsvägen 29, 302 37 Halmstad
                </a>
              </p>
            </div>
          </div>

          <div className="info-item d-flex mb-3">
            <i className="bi bi-envelope me-2"></i>
            <div>
              <h4>{t('contact.email')}</h4>
              <p><a href="mailto:info@ayurharmonyretreat.se?subject=Inquiry">info@ayurharmonyretreat.se</a></p>
            </div>
          </div>

          <div className="info-item d-flex mb-3">
            <i className="bi bi-phone me-2"></i>
            <div>
              <h4>{t('contact.call')}</h4>
              <p>
                <a href="tel:+46764532701">{t('+46764532701')}</a>
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:info@ayurharmonyretreat.se?subject=Inquiry"
              className="green-button btn mt-3"
            >
              {t('contact.bookNow')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;