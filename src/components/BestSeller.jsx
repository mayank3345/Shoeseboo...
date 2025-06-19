import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "X Lows HAZELNUT",
    price: 4299,
    badge: "Bestseller",
    images: [
      "https://res.cloudinary.com/yourcloud/image/upload/v1/shoe1.jpg",
      "https://res.cloudinary.com/yourcloud/image/upload/v1/shoe1-side.jpg",
      "https://res.cloudinary.com/yourcloud/image/upload/v1/shoe1-top.jpg",
    ],
  },
  {
    title: "X Lows HAZELNUT",
    price: 4299,
    badge: "Bestseller",
    images: [
      "https://res.cloudinary.com/yourcloud/image/upload/v1/shoe1.jpg",
      "https://res.cloudinary.com/yourcloud/image/upload/v1/shoe1-side.jpg",
      "https://res.cloudinary.com/yourcloud/image/upload/v1/shoe1-top.jpg",
    ],
  },
  {
    title: "X Lows HAZELNUT",
    price: 4299,
    badge: "Bestseller",
    images: [
      "https://res.cloudinary.com/yourcloud/image/upload/v1/shoe1.jpg",
      "https://res.cloudinary.com/yourcloud/image/upload/v1/shoe1-side.jpg",
      "https://res.cloudinary.com/yourcloud/image/upload/v1/shoe1-top.jpg",
    ],
  },
  {
    title: "X Lows HAZELNUT",
    price: 4299,
    badge: "Bestseller",
    images: [
      "https://res.cloudinary.com/yourcloud/image/upload/v1/shoe1.jpg",
      "https://res.cloudinary.com/yourcloud/image/upload/v1/shoe1-side.jpg",
      "https://res.cloudinary.com/yourcloud/image/upload/v1/shoe1-top.jpg",
    ],
  },
];

const BestSeller = () => {
  return (
    <div className="grid grid-cols-2  lg:grid-cols-4 gap-0 px-4 py-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default BestSeller;
