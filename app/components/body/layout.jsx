import React from "react";
import Banner from "./banner/Banner";
import AboutUS from "./aboutUS/About";
import Founder from "./Founder/Founder";
import Product from "./product/Product";
import Contact from "./contact/Contact";
import BestTeam from "./bestTeam/BestTeam";
import BannerMovie from "./bannerMovie/bannerMovie";
import Service from "./service/Service";
import Projet from "./projet/Projet";
import Testimonial from "./testimonial/Testimonial";
import BannerFixed from "./bannerfixed/BannerFixed";
import Blog from "./blog/Blog";
import BannerWhy from "./bannerWhy/BannerWhy";

export default function page() {
  return (
    <div className="">
      <Banner />
      <AboutUS />
      <Founder />
      <BannerMovie />
      <Service />
      <Projet />
      <Testimonial />
      <BannerFixed />
      <Blog />
      {/* <Product /> */}
      <Contact />
      <BannerWhy />
      <BestTeam />
    </div>
  );
}
