import React, { useRef } from 'react';
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
    const subject = t('contact.subject') + ': ' + form.subject.value; // Adjust as necessary
    const message = `
      Name: ${form.name.value}
      Email: ${form.email.value}
      Subject: ${subject}
      Message: ${form.message.value}
    `;
    
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${encodedMessage}`;
  };

  return (
    <section id="contact" className="contact section">
      <div className="container" data-aos="fade">
        <div className="row gy-5 gx-lg-5">
          <div className="col-lg-4">
            <div className="info">
              <h3>{t('contact.getInTouch')}</h3>
              <p>{t('contact.weLoveToHear')}</p>

              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>{t('contact.location')}</h4>
                  <p><a href="https://maps.app.goo.gl/PyKXt1yMdZcVTjXG6">AHN Kiropraktorerna, Söndrumsvägen 29, 302 37 Halmstad</a></p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>{t('contact.email')}</h4>
                  <p>info@ayurharmonyretreat.se</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>{t('contact.call')}</h4>
                  <p>+46 76 453 27 01</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form ref={formRef} onSubmit={sendEmail} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" placeholder={t('contact.yourName')} required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" placeholder={t('contact.yourEmail')} required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" placeholder={t('contact.subject')} required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" placeholder={t('contact.message')} required></textarea>
              </div>
              <div className="text-center">
                <button type="submit">{t('contact.bookNow')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
