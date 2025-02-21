

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';

// Import images
import house from "../../assets/house.png";
import house1 from "../../assets/house1.png";
import house2 from "../../assets/house2.png";
import house3 from "../../assets/house3.png";
import house4 from "../../assets/house4.png";

const Banner = () => {
    return (
        <div className=''>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><img src={house} alt="House " className="w-full h-[550px]" /></SwiperSlide>
                    <SwiperSlide><img src={house2} alt="House 1" className="w-full h-[550px]" /></SwiperSlide>
                    <SwiperSlide><img src={house1} alt="House 2" className="w-full h-[550px] " /></SwiperSlide>
                    <SwiperSlide><img src={house3} alt="House 3" className="w-full h-[550px]" /></SwiperSlide>
                    <SwiperSlide><img src={house4} alt="House 4" className="w-full h-[550px]" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;
