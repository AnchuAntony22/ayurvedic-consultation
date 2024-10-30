import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Include Navigation
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Include Swiper CSS for navigation
import 'swiper/css/autoplay';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { t } = useTranslation(); // Get the translation function

  useEffect(() => {
    AOS.init();
  }, []);

  // Retrieve testimonials from translations
  const testimonials = t('testimonials', { returnObjects: true });

  return (
    <main className="main">
      <section id="team" className="team section">
        <div className="site-section slider-team-wrap">
          <div className="container">
            <div className="slider-nav d-flex justify-content-end mb-3">
              <a ref={prevRef} href="#" className="js-prev js-custom-prev">
                <i className="bi bi-arrow-left-short"></i>
              </a>
              <a ref={nextRef} href="#" className="js-next js-custom-next">
                <i className="bi bi-arrow-right-short"></i>
              </a>
            </div>

            <Swiper
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              modules={[Autoplay, Pagination, Navigation]} // Include Navigation module
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 30 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1200: { slidesPerView: 3, spaceBetween: 30 },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="team">
                    <div className="pic" style={{ position: 'relative' }}>
                      <img
                        src={`${process.env.PUBLIC_URL}/Active/assets/img/team/${testimonial.image || 'placeholder.jpg'}`}
                        alt={testimonial.name}
                        className="img-fluid"
                        onError={(e) => {
                          e.target.style.display = 'none'; // Hide the image
                          e.target.nextSibling.style.display = 'block'; // Show placeholder
                        }}
                      />
                      <div className="placeholder1" style={{ 
                        display: 'none', // Initially hidden
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        backgroundColor: '#e0e0e0', // Example background color
                        zIndex: 1 // Ensure placeholder is on top
                      }}></div> {/* Gray placeholder */}
                    </div>
                    <h3>
                      <a href="#">
                        <span>{testimonial.name}</span>
                      </a>
                    </h3>
                    <span className="d-block position">{testimonial.location || 'Unknown'}</span>
                    <p>{testimonial.quote}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
