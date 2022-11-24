import '../css/Backdrop.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function ModalWork() {
    return (
        <div className='modals'>
            <div className='modalItem'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className='image'>
                        <img src={require('../images/10.jpg')} alt='작품' />
                    </SwiperSlide>
                    <SwiperSlide className='image'>
                        <img src={require('../images/7.jpg')} alt='작품' />
                    </SwiperSlide>
                    <SwiperSlide className='image'>
                        <img src={require('../images/1.jpg')} alt='작품' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ModalWork
