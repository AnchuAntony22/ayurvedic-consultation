import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Testimonials1 = () => {
  const { t } = useTranslation(); // Get the translation function

  React.useEffect(() => {
    AOS.init();
  }, []);

  const testimonials = t('testimonials', { returnObjects: true }); // Fetch testimonials array
  console.log(testimonials); // Check the testimonials array

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <p>{t('Happy Customers')}</p>
        <h2>{t('Testimonials')}</h2>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <Swiper
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              pagination={{
                clickable: true,
                type: 'bullets',
                el: '.swiper-pagination',
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 40 },
                1200: { slidesPerView: 1, spaceBetween: 1 },
              }}
              modules={[Autoplay, Pagination]}
              className="init-swiper"
            >
              {testimonials.map((testimonial, index) => {
                const imageSrc = `${process.env.PUBLIC_URL}/Active/assets/img/team/${testimonial.image}`;
                return (
                  <SwiperSlide key={index}>
                    <div className="testimonial mx-auto">
                      <figure className="img-wrap">
                        {/* Conditional rendering for image or placeholder */}
                        {testimonial.image ? (
                          <img
                            src={imageSrc}
                            alt={testimonial.name}
                            className="img-fluid"
                            onError={(e) => { e.target.onerror = null; e.target.src = '/path/to/placeholder-image.jpg'; }} // Optional: Set a placeholder image on error
                          />
                        ) : (
                          <div className="placeholder"></div>
                        )}
                      </figure>
                      <h3 className="name">{testimonial.name}</h3>
                      <span className="d-block position">{testimonial.location || 'Unknown'}</span>
                      <blockquote>
                        <p>{testimonial.quote}</p>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials1;
