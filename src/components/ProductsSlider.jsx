import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ProductCard from "./ProductCard";

import arrow from "@icons/arrow.svg";

import 'swiper/css';
import 'swiper/css/navigation';

export default function ProductsSlider() {
    const products = [{}]
  return (
    <>
        <ProductCard/>
    </>
  )
}
