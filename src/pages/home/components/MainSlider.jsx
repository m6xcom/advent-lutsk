import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade , Navigation } from 'swiper';

import arrow from "@icons/arrow.svg";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

function MainSlider({parentClass}){
    const prevButtonRef = useRef();
    const nextButtonRef = useRef();

    const slides = [
        {
            'img': '/img/slides/slide1.png',
            'title': 'Подарунок на день закоханих',
            'button': true,
            'buttonText': 'Обирай свій'
        },
        {
            'img': '/img/slides/slide2.png',
            'title': 'Цекут працівник року',
            'button': true,
            'buttonText': 'Обирай свого'
        }
    ]
    return(
        <section className={ parentClass + ' main-slider' }>
            <Swiper modules={[EffectFade, Navigation]} navigation={{
                    nextEl: nextButtonRef.current,
                    prevEl: prevButtonRef.current,
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevButtonRef.current;
                    swiper.params.navigation.nextEl = nextButtonRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                slidesPerView={1} effect="fade">
                { slides.map(el=>{
                    return (
                        <SwiperSlide>
                            <div className="main-slider__slide">
                                <picture className="main-slider__picture">
                                    <img className="main-slider__img" src={el.img} alt={el.title}/>
                                </picture>
                                <div className="main-slider__info">
                                     <span className="main-slider__title">
                                        {el.title}
                                    </span>
                                    {el.button ? <button className="main-slider__button" type="button">{el.buttonText}</button> : ''}
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                <button ref={prevButtonRef} type='button' className="main-slider__controll-button swiper-button-disabled swiper-button-prev">
                    <svg className="main-slider__controll-button-icon">
                        <use xlinkHref={`#${arrow}`}></use>
                    </svg>
                </button>
                <button ref={nextButtonRef} type='button' className="main-slider__controll-button swiper-button-next">
                    <svg className="main-slider__controll-button-icon">
                        <use xlinkHref={`#${arrow}`}></use>
                    </svg>
                </button>
            </Swiper>
        </section>
    )
}

export default MainSlider;