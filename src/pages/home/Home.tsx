import React from "react";
import HeroSection from "./hero/Hero";
import ServiceAdvertisement from "./service/Service";
import Title from "@/components/Title";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import FeaturedBrands from "./featuredProducts/FeatureBrand";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ServiceAdvertisement />
      <Title title="New arrival" subTitle="Shop now" />
      <FeaturedProducts />
      <FeaturedBrands />
      <Review />
    </div>
  );
};

export default Home;
