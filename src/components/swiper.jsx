import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css"
import { useNavigate } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const SwiperCarousol = () => {
    const navigate = useNavigate();
  return (
    <div className="w-full h-[30vh] lg:h-[55vh] md:h-[50vh] border-2 border-purple-700 rounded overflow-hidden">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
            delay:4000,
            disableOnInteraction: true
        }}
        navigation={true}
        pagination={{ clickable: true }}
        centeredSlides={true}
        modules={[Autoplay,Pagination,Navigation]}
        className="w-full h-full">
        <SwiperSlide className="w-full h-full">
          <div
            style={{
              backgroundImage: `url('/banner/banner1.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
            className="w-full h-full flex flex-col relative group"
          >
            <div
              className="absolute inset-0 w-full h-full backdrop-filter-none group-hover:backdrop-blur-[3px] group-hover:backdrop-brightness-50 transition-all duration-300 ease-in-out"
              style={{ zIndex: 1 }}
            ></div>

            
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 p-8 h-full ">
            <h1 className="w-full text-center font-extrabold text-3xl opacity-0 group-hover:opacity-100 text-white ease-in-out transition duration-700">Custom-built PCs</h1>
              <button
              onClick={() => navigate('/collection')}
              className="p-2 rounded transition duration-700 translate-y-6 group-hover:translate-y-0 ease-in-out opacity-0 group-hover:opacity-100 bg-gray-200 w-[9rem] text-black">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div
            style={{
              backgroundImage: `url('/banner/banner2.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
            className="w-full h-full flex flex-col relative group"
          >
            <div
              className="absolute inset-0 w-full h-full backdrop-filter-none group-hover:backdrop-blur-[3px] group-hover:backdrop-brightness-50 transition-all duration-300 ease-in-out"
              style={{ zIndex: 1 }}
            ></div>

            
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 p-8 h-full ">
            <h1 className="w-full text-center font-extrabold text-3xl opacity-0 group-hover:opacity-100 text-white ease-in-out transition duration-700">Top Brands</h1>
              <button
              onClick={() => navigate('/collection')}
              className="p-2 rounded transition duration-700 translate-y-6 group-hover:translate-y-0 ease-in-out opacity-0 group-hover:opacity-100 bg-gray-200 w-[9rem] text-black">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div
            style={{
              backgroundImage: `url('/banner/banner3.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
            className="w-full h-full flex flex-col relative group"
          >
            <div
              className="absolute inset-0 w-full h-full backdrop-filter-none group-hover:backdrop-blur-[3px] group-hover:backdrop-brightness-50 transition-all duration-300 ease-in-out"
              style={{ zIndex: 1 }}
            ></div>

            
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 p-8 h-full ">
            <h1 className="w-full text-center font-extrabold text-3xl opacity-0 group-hover:opacity-100 text-white ease-in-out transition duration-700">Best Advice</h1>
              <button
              onClick={() => navigate('/collection')}
              className="p-2 rounded transition duration-700 translate-y-6 group-hover:translate-y-0 ease-in-out opacity-0 group-hover:opacity-100 bg-gray-200 w-[9rem] text-black">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousol;
