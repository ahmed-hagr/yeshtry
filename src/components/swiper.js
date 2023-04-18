import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";

import "./styles.scss";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

export default (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainurl = "https://api.yeshtery.com/v1/yeshtery/files/"

  const returnSlider = () => {

  }

  return (
    <>
      {props.ProductDetails.images ?



        <div className="productSwipper mb-3">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="mySwiper2 min"
            height={100}
            loop={true}

            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {props.ProductDetails.images.map((image, index) =>
              <SwiperSlide key={index}>
                <img src={mainurl + image.url} />
              </SwiperSlide>
            )}

          </Swiper>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            loop={true}

            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="mySwiper"
          >
            {props.ProductDetails.images.map((image, index) =>

              <SwiperSlide key={index}>

                <img src={mainurl + image.url} />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        :
        <div className="progress">
          <CircularProgress color="success" />

        </div>
      }

    </>
  );
}
