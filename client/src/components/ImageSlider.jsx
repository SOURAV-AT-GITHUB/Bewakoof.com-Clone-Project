import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';
const ImageSlider = ({ images, delay = 3000 }) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMinWidth768  = useMediaQuery('(min-width:768px)')
  const settings = {
    dots: true,
    infinite: false,
    speed: 750,
    slidesToShow: isMinWidth768 ? 3 :1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: delay,
    draggable: true,
    swipeToSlide: true,
    pauseOnHover:false,
    afterChange: (index) => {
      setActiveIndex(index);
    },
  };
  useEffect(() => {
    if (activeIndex >= images.length - 3) {
      if (sliderRef.current) {
        setTimeout(() => {
          sliderRef.current.slickGoTo(0);
        }, 1900);
      }
    }
  }, [activeIndex, images.length]);
  return (
    <div className="max-w-full overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        {images.map((eachSlide, index) => (
          <div key={index} className="max-h-[70vh]">
            <img src={eachSlide} alt="" className={`h-full w-full md:w-[95%]`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
