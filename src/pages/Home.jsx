import React from "react";
import TopHeading from "../components/TopHeading";
import Navbar from "../components/Navbar";
import CategoryDropDown from "../components/CategoryDropDown";

const Home = () => {
  return (
    <div>
      <TopHeading></TopHeading>
      <Navbar></Navbar>
      <CategoryDropDown></CategoryDropDown>
    </div>
  );
};

export default Home;
