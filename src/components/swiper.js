import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Box from '@mui/material/Box';
// import CircularProgress from '@mui/material/CircularProgress';

import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


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

  const [loading, setloading] = React.useState(false);
  const mainurl = "https://api.yeshtery.com/v1/yeshtery/files/"


  useEffect(() => {
    if (props.ProductDetails) {
      setloading(true)
    }

  }, [props.ProductDetails]);

  return (
    <>



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

          {

            (!loading ?
              Array.from(new Array(4)) : props.ProductDetails.images).map((image, index) => (
                image ? (
                  <SwiperSlide className="test" key={index}>

                    <img src={mainurl + image.url} />

                  </SwiperSlide>
                ) : (
                  <SwiperSlide className="test" key={index}>
                    <Skeleton variant="rectangular" height={500} />
                  </SwiperSlide>

                )))

          }          </Swiper>
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


          {

            (!loading ?
              Array.from(new Array(4)) : props.ProductDetails.images).map((image, index) => (
                image ? (
                  <SwiperSlide className="test" key={index}>

                    <img src={mainurl + image.url} />

                  </SwiperSlide>
                ) : (
                  <SwiperSlide className="test" key={index}>
                    <Skeleton variant="rectangular" height={200} />
                  </SwiperSlide>

                )))

          }
        </Swiper>
      </div>


    </>
  );
}
