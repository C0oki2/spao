import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation} from 'swiper/modules';
import Product from './Product';

const Home_Swiper2 = (props) => {

    let {tab, clothes, no } =props;

    return (
      <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="home_swiper2"
          breakpoints={{
          // 500 픽셀 이하의 모바일 화면
            550: {
              slidesPerView: 1,
              spaceBetween: 10,

            },

            // 640 픽셀 이하의 모바일 화면
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // 768 픽셀 이하의 태블릿 화면
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // 1024 픽셀 이하의 데스크탑 화면
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1200: {
              slidesPerView: 4,
              spaceBetween: 0,

            }
          }}
        >
          {clothes.slice(32, 41).map((clo, i) => (
            <SwiperSlide key={i} style={{display:'flex', flexDirection:'column'}}>
              <Product clothes={clo} key={i} i={i} no={no} tab={tab} />
            <div className='color-squares'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
   
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
    
}

export default Home_Swiper2