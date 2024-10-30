import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isHovered, setIsHovered] = useState(false); // State to track hover


  useEffect(() => {
    AOS.init();
  }, []);

  const services = t('services', { returnObjects: true });

  const handleServiceClick = (index) => {
    setActiveIndex(index);
    if (swiperInstance) {
      swiperInstance.slideTo(index);
      swiperInstance.autoplay.stop();

      setTimeout(() => {
        swiperInstance.slideTo(index);
        swiperInstance.autoplay.start();
      }, 1000);
    }
  };

  return (
    <section id="tabs" className="tabs section light-background">
      <div className="container">
        <div className="row gap-x-lg-4 justify-content-between">
          <div className="col-lg-4 js-custom-dots">
            {services.map((service, index) => (
              <a
                href="#"
                key={index}
                className={`service-item link horizontal d-flex ${activeIndex === index ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleServiceClick(index);
                }}
              >
                <div className={`service-icon color-${index + 1} mb-4`}>
                  <i className={`bi bi-${index === 0 ? 'heart-pulse' : index === 1 ? 'heart' : index === 2 ? 'emoji-smile' : index === 3 ? 'emoji-heart-eyes' : index === 4 ? 'patch-check' : 'balloon-heart-fill'}`}></i>
                </div>
                <div className="service-contents">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="col-lg-8">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={false}
              speed={600}
              autoHeight={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView="auto"
              pagination={{ clickable: true, type: 'bullets' }}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 40 },
                1200: { slidesPerView: 1, spaceBetween: 1 },
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <img src={`${process.env.PUBLIC_URL}${service.image}`} alt={service.title} className="img-fluid service-image"
                   
                 />

                  <div className="p-2 ">
                    <h3 className="text-gray h5 mb-3 text-center">{service.title}</h3>
                    {Array.isArray(service.details) && service.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                    <Link 
                      to="/Consultation-details" 
                      className="btn btn-get-started" 
                      style={{
                        marginRight: '10px',
                        backgroundColor: isHovered ? 'darkgreen' : 'green', // Change color on hover
                        color: 'white',
                      }}
                      onMouseEnter={() => setIsHovered(true)} // Set hover state
                      onMouseLeave={() => setIsHovered(false)} // Reset hover state
                    >
                      {t('Price Guide')}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
