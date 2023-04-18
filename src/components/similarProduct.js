import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./styles.scss";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";

export default (props) => {
  const mainurl = "https://api.yeshtery.com/v1/yeshtery/files/"

  return (
    <section>
      <h2 className="min-links">Similar Products</h2>
      {props.SimilarCategory.products ?

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
          {props.SimilarCategory.products.map((product, index) =>
            <SwiperSlide className="test" key={index}>

              <img src={mainurl + product.image_url} />

            </SwiperSlide>
          )}


        </Swiper>
        : null
      }
    </section>
  );
}
