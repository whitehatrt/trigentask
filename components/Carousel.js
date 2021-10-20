import axios from "axios";
import { useEffect, useState } from "react";
export default function Carousel() {
  const [carousel, setCarousel] = useState();

  useEffect(async () => {
    const res = await axios.get("carouselData");
    setCarousel(res.data);
  }, []);
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2500"
    >
      <div className="carousel-inner">
        {carousel?.map((ca, i) => {
          return (
            <div className={`carousel-item ${i === 0 && "active"}`} key={i}>
              <img src={ca.image} className="d-block w-100" alt={ca.alt} />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
