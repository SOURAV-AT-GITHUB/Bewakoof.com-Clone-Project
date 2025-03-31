import StarRatings from "/star.svg";
import { NavLink } from "react-router-dom";
export default function SlideCard({ product }) {
  return (
    <div className="relative min-w-[19.025%] max-w-[19.025%] h-full border border-gray-400">
        <NavLink to={`/product/${encodeURIComponent(product.title)}`}>
        {product.tag && (
          <p
            className={`absolute left-0 top-0 text-xs text-white p-1 px-2 ${
              product.tag.includes("BUY") ? "bg-green-500" : "bg-gray-700"
            }`}
          >
            {product.tag}
          </p>
        )}
        <div className="relative h-4/5 w-full">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
          {product.ratings && (
            <div className="absolute left-2 bottom-2 flex gap-1 items-center p-px px-1 rounded-md bg-white">
              <img src={StarRatings} alt="" />
              <p>{product.ratings}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col p-2">
          <p className="font-medium text-lg">{product.brand}</p>
          <p className="text-sm font-light line-clamp-1">{product.title}</p>
          <div className="flex gap-2 items-center">
            <p className="font-medium">₹{product.price}</p>
            {product.mrp && (
              <p className="line-through text-gray-400 text-xs">
                ₹{product.mrp}
              </p>
            )}
            {product.discount && (
              <p className="text-green-500 text-xs">₹{product.discount}</p>
            )}
          </div>
        </div>
    </NavLink>
      </div>
  );
}
