import { useEffect, useRef, useState } from "react";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import LeftArrow from "/LeftArrow.svg";
import RightArrow from "/RightArrow.svg";
import ProductCard from '../components/ProductCard'
export default function ProductsSlider({ category = null }) {
  const [data, setData] = useState(null);
  const containerRef = useRef(null);
  async function getData() {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/products/by-category?category=${encodeURIComponent(
          category
        )}`
      );
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
      setData(null);
    }
  }
  useEffect(() => {
    getData();
  }, [category]);
  const scrollLeft = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({
        left: -containerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({
        left: containerWidth,
        behavior: "smooth",
      });
    }
  };
  if (!category || !data) return <div></div>;
  return (
    <section className="p-4">
      <h3 className="text-center my-4 text-lg">NEW ARRIVALS</h3>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute z-10 left-10 top-2/4 -translate-x-2/4 bg-white p-4 rounded-full outline-none"
        >
          <img src={LeftArrow} alt="" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute z-10 right-0 top-2/4 -translate-x-2/4 bg-white p-4 rounded-full outline-none"
        >
          <img src={RightArrow} alt="" />
        </button>

        <div
          ref={containerRef}
          className="relative flex gap-4 overflow-x-hidden h-[450px] hide-scrollbar"
        >
          {data.products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
