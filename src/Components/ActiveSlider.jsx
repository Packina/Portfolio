import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../Components/ServiceData";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[550px] lg:mt-0 ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide
            key={item.title}
            className="card px-6 h-[350px] w-[215px]  bg-base-100 shadow-xl lg:m-10 lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer "
          >
            <figure>
              <img
                src={item.backgroundImage}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              {item.title}
              </h2>
              <p>{item.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
