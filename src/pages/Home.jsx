import React from "react";
import TopHeading from "../components/TopHeading";
import Navbar from "../components/Navbar";
import CategoryDropDown from "../components/CategoryDropDown";
import HeroSection from "../components/HeroSection";
import BurgerMenu from "../components/BurgerMenu";
import ProductCard from "../components/ProductCard";
import BestSeller from "../components/BestSeller";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <TopHeading></TopHeading>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <BestSeller></BestSeller>
      <Footer />
    </div>
  );
};

export default Home;
