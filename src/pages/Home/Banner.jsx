import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

function Banner({estates}) {
  const selectedEstates = estates.filter(es => es.id==3 || es.id==7 || es.id==8)

  return (  
    <section className="px-4">
      <div className="max-w-screen-xl py-6 mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{clickable: true}}
          autoplay={true}
        >
          {selectedEstates.map(estate => (
            <SwiperSlide key={estate.id}>
              <div className='relative'>
                <figure>
                  <img src={estate.image} alt="" className='w-full h-96 md:h-[600px]  object-cover rounded-lg' /> 
                </figure>
                <div className='absolute bottom-4 left-4 space-y-1 rounded-md text-white p-4 bg-[rgba(0,0,0,.5)]'>
                  <h3 className='text-xl md:text-2xl'>{estate.estate_title}</h3>
                  <p className="text-sm">{estate.location}</p>
                  <p className='text-sm'>{estate.price}</p>
                  <p className='bg-yellow-400 text-red-900 rounded-2xl py-1 px-3 font-bold inline-block'>Hot deal</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Banner;