import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from '@mui/material/Skeleton';
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./styles.scss";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";

export default (props) => {

  const [loading, setloading] = React.useState(false);
  const mainurl = "https://api.yeshtery.com/v1/yeshtery/files/"


  useEffect(() => {
    if (props.SimilarCategory) {
      setloading(true)
    }

  }, [props.SimilarCategory]);
  return (
    <section>
      <h2 className="min-links">Similar Products</h2>

      <Swiper
        loop={true}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}

        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        className="mySwiper similarProdu mb-3"
      >


        {
          (!loading ?
            Array.from(new Array(4)) : props.SimilarCategory.products).map((product, index) => (
              product ? (
                <SwiperSlide className="test" key={index}>

                  <img src={mainurl + product.image_url} />

                </SwiperSlide>
              ) : (
                <SwiperSlide className="test" key={index}>
                  <Skeleton variant="rectangular" height={200} />
                </SwiperSlide>

              )))
        }




      </Swiper>

    </section>
  );
}
