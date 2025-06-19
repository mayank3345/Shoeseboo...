import React from "react";
import TopHeading from "../components/TopHeading";
import Navbar from "../components/Navbar";
import CategoryDropDown from "../components/CategoryDropDown";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div>
      <TopHeading></TopHeading>
      <Navbar></Navbar>
      <CategoryDropDown></CategoryDropDown>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Home;
