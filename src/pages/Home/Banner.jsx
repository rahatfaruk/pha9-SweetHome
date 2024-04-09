import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

function Banner() {
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl py-4 mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{clickable: true}}
          autoplay={true}
        >
          <SwiperSlide>slide 1</SwiperSlide>
          <SwiperSlide>slide 2</SwiperSlide>
          <SwiperSlide>slide 3</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Banner;