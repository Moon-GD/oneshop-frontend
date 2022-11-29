import '../css/Backdrop.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function ModalWork(props) {
    let imageLink = props.imageLink.images;

    return (
      <div className="modals">
        <div className="modalItem">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {imageLink.map((item) => (
              <SwiperSlide className="image">
                <img
                  src={
                    "http://3.36.122.123:8080/api/image/" +
                    item
                  }
                  alt="작품"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
}

export default ModalWork
