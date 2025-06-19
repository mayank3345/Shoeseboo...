import React, { useEffect, useState } from "react";

const BurgerMenu = () => {
  const baseURL = import.meta.env.VITE_CLOUDINARY_BASE_URL;
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    // Simulate fetching from API or props
    const fetchImagePath = async () => {
      // You can fetch this from an API/backend instead
      const fetchedImagePath = "HeroSection/pq3mxde8cbxp5yntnb6i.webp";
      setImagePath(fetchedImagePath);
    };

    fetchImagePath();
  }, []);

  const fullImageURL = `${baseURL}${imagePath}`;

  return (
    <section
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${fullImageURL})` }}
    >
      <div className="text-center text-black">
        <h1 className="text-5xl font-bold">Welcome to SHOESeboo</h1>
        <p className="text-xl mt-4">Your ultimate sneaker hub</p>
      </div>
    </section>
  );
};

export default BurgerMenu;
