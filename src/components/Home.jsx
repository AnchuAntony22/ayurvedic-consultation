import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import About from './About';
import Testimonials1 from './Testimonials1';
import Services from './Services';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <main className="main">
        <section id="about" className="about section">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2" data-aos="fade-up" data-aos-delay="400">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  loop={true}
                  speed={600}
                  autoplay={{ delay: 5000 }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 40 },
                    1200: { slidesPerView: 1, spaceBetween: 1 },
                  }}
                >
                  <SwiperSlide>
                    <img src={`${process.env.PUBLIC_URL}/Active/assets/img/img4.webp`} alt="Image" className="img-fluid" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${process.env.PUBLIC_URL}/Active/assets/img/balancing-mind.jpg`} alt="Image" className="img-fluid" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${process.env.PUBLIC_URL}/Active/assets/img/nadi-pariksha-bg.jpg`} alt="Image" className="img-fluid" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={`${process.env.PUBLIC_URL}/Active/assets/img/shiro abhyanga.jpg`} alt="Image" className="img-fluid" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-lg-4 order-lg-1">
                <span className="section-subtitle" data-aos="fade-up">{t('welcome')}</span>
                <h1 className="mb-4" data-aos="fade-up">
                  {t('ayurvedic_consultation')}
                </h1>
                <p data-aos="fade-up">
                  {t('experience_ayurveda')}
                </p>
                <p className="mt-5" data-aos="fade-up">
                  <Link to="/About" className="btn btn-get-started" style={{ marginRight: '10px' }}>{t('about_me')}</Link>
                  <Link to="/Services" className="btn btn-get-started" style={{ marginRight: '10px' }}>{t('read_more')}</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- About 2 Section --> */}
        <About />
        <Services />
        {/* <!-- /About 2 Section --> */}
        <Testimonials1 />
      </main>
    </div>
  );
};

export default Home;
