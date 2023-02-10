import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

function MainSlider({parentClass}){
    const slides = [
        {
            'img': '/img/slides/slide1.png',
            'title': 'Подарунок на день закоханих',
            'button': true,
            'buttonText': 'Обирай свій'
        },
        {
            'img': '/img/slides/slide1.png',
            'title': 'Цекут працівник року',
            'button': true,
            'buttonText': 'Обирай свого'
        }
    ]
    return(
        <section className={ parentClass + ' main-slider' }>
            <Swiper modules={[EffectFade]} slidesPerView={1}>
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
            </Swiper>
        </section>
    )
}

export default MainSlider;