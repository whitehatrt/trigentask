import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";

SwiperCore.use([Autoplay]);

export default function Products() {
  const [products, setProducts] = useState();

  useEffect(async () => {
    const res = await axios.get("productsData");
    setProducts(res.data);
  }, []);
  return (
    <>
      <div className="my-4"><Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          376: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          449: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {products?.map((pa, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="mx2">
                <div className="ProductContainer">
                  <img src={pa.image} alt={pa.imgAlt} className="pimage" />
                  <p>{pa.name}</p>
                  <p>{pa.price}₹</p>

                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper></div>
    </>
  );
}
