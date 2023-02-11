import React, { useRef , useState} from "react";
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import arrow from "@icons/arrow.svg";
import instagramLike from "@icons/instagram-like.svg";
import instagramDislike from "@icons/instagram-dislike.svg";
import instagramComment from "@icons/instagram-comment.svg";
import instagramSave from "@icons/instagram-save.svg";
import logo from '@img/logo.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductDetails({parentClass, modalRef ,isOpen, toggleModal}) {
    const [currentSlide, setCurrentSlide] = useState(1); 
    const [likes, setLikes] = useState(Math.ceil(Math.random() * 1000));
    const [isLiked, setIsLiked] = useState(false);
    const mediaFiles =[
        {
            src: 'product1-1.jpg',
            type: 'image'
        },
        {
            src: 'video.mp4',
            type: 'video'
        }
    ]
  return (
    <div ref={modalRef} className={`${parentClass} product-details ${isOpen ? " active" : ''}`}>
        <div className="product-details__content">
            <div className="product-details__header">
                <div className="product-details__header-container container">
                    <button className="product-details__close-button" onClick={toggleModal} type="button">
                        <svg className="product-details__back-icon">
                            <use xlinkHref={`#${arrow}`}></use>
                        </svg>
                    </button>
                    <h3 className="product-details__company-title">
                        advent_lutsk
                    </h3>
                    <button className="product-details__follow-button" type="button">
                        Стежити
                    </button>
                </div>
            </div>
            <div className="product-details__middle">
                <div className="product-details__middle-container container">
                    <a className="product-details__logo-link" target="_blank" href="https://instagram.com/advent_lutsk?igshid=YmMyMTA2M2Y=">
                        <img className="product-details__logo" src={logo} alt="advent_lutsk"/>
                        <span className="product-details__logo-name">advent_lutsk</span>
                    </a>
                </div>
            </div>
            <div className="product-details__slider">
                { mediaFiles.length > 0 ? <span className="product-details__slider-counter">{currentSlide}/{mediaFiles.length}</span> : ''}
                <Swiper onSlideChange={(swiper)=>{
                        const prevVideo = swiper.slides[currentSlide - 1].querySelector('video');
                        if(prevVideo){
                            prevVideo.pause();
                        }
                        setCurrentSlide(swiper.activeIndex + 1);
                        const nextVideo = swiper.slides[swiper.activeIndex].querySelector('video');
                        if(nextVideo){
                            nextVideo.currentTime = 0;
                        }
                    }} slidesPerView={1}>
                    {mediaFiles.map((el,index)=>{
                        return (
                        <SwiperSlide key={index}>
                            {el.type === 'image' ?
                                <picture className="product-details__slide-picture">
                                    <img className="product-details__slide-img" src={`/img/products/` + el.src} alt={"Ведмідь в носках, фото " + `${index + 1}`} />
                                </picture>
                                : el.type === 'video' ? 
                                    <ReactPlayer playing={true} className="product-details__slide-video" muted={true} controls={true} url={`/img/products/` + el.src}/>
                                : ''
                            }
                        </SwiperSlide>)
                    })}
                </Swiper>
            </div>
            <div className="product-details__tools container">
                <button className="product-details__tool-button" onClick={()=>{
                    setIsLiked(!isLiked);
                    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
                }} type="button">
                    <svg className="product-details__tool-icon">
                        <use xlinkHref={`#${isLiked ? instagramDislike : instagramLike}`}></use>    
                    </svg> 
                </button>
                <button className="product-details__tool-button" type="button">
                    <svg className="product-details__tool-icon">
                        <use xlinkHref={`#${instagramComment}`}></use>    
                    </svg> 
                </button>
                <button className="product-details__tool-button product-details__tool-button--right" type="button">
                    <svg className="product-details__tool-icon">
                        <use xlinkHref={`#${instagramSave}`}></use>    
                    </svg> 
                </button>
            </div>
            <span className="product-details__likes container">
                {likes} вподобань
            </span>
            <p className="product-details__description container">
                <span className="product-details__description--bold">advent_lutsk </span>
                Бюджетний подарунковий бокс для хлопця🎁 Часто обрати дарунок буває досить важко.
                 День народження, дата відносин, День святого Валентина чи будь-яке інше свято - треба подарунки. З часом ти сидиш та думаєш: "Що йому ще не вистачає?😢".
            </p>
        </div>
    </div>
  )
}

