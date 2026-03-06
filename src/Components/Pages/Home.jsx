import React from "react";
import { Divide } from "lucide-react"; 
import HeroHome from "../Home/HeroHome";
import ClientsSwiper from "../Home/ClientsSwiper"; 
import PremiumServices from "../Home/PremiumServices";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <ClientsSwiper />
      <PremiumServices/>
    </div>
  );
};

export default Home;