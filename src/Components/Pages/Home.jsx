import React from "react";
import { Divide } from "lucide-react"; 
import HeroHome from "../Home/HeroHome";
import ClientsSwiper from "../Home/ClientsSwiper"; 

const Home = () => {
  return (
    <div>
      <HeroHome />
      <ClientsSwiper />
    </div>
  );
};

export default Home;