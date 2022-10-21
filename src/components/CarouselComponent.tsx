import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-cards"
import { imagesCarousel } from '../utils/data';

const CarouselComponent = () => {
  
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
        spaceBetween={50}
        slidesPerView="auto"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        direction='horizontal'
        autoplay={true}
        loop={true}
      >
        <SwiperSlide className='w-full flex justify-center mt-5'>
          <img src={imagesCarousel[0]} className='w-full h-96 object-contain' />
        </SwiperSlide>
        <SwiperSlide className='w-full flex justify-center mt-5'>
          <img src={imagesCarousel[1]} className="object-contain h-96 w-full" />
        </SwiperSlide>
        <SwiperSlide className='w-full flex justify-center mt-5'>
          <img src={imagesCarousel[2]} className="object-contain h-96 w-full" />
        </SwiperSlide>
        <SwiperSlide className='w-full flex justify-center mt-5'>
          <img src={imagesCarousel[3]} className="object-contain h-96 w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
