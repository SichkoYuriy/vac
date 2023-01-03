<template>
    <div class="slider">
        <swiper :modules="modules" class="slider-component"
            :navigation="{ nextEl: `.custom-next-${id}`, prevEl: `.custom-prev-${id}` }" :breakpoints=breakpoints>
            <swiper-slide class="slider-component__slide">
                <slot name="slide1"></slot>
            </swiper-slide>
            <swiper-slide class="slider-component__slide">
                <slot name="slide2"></slot>
            </swiper-slide>
            <swiper-slide class="slider-component__slide">
                <slot name="slide3"></slot>
            </swiper-slide>
            <swiper-slide class="slider-component__slide">
                <slot name="slide4"></slot>
            </swiper-slide>
        </swiper>
        <slot></slot>
    </div>
</template>

<script>
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';


export default {
    name: 'SliderComponent',
    components: {
        Swiper, SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
        }
    },
    props: {
        breakpoints: {
            type: String
        },
        id: {
            type: String
        },
    }
}
</script>

<style >
.swiper-button-disabled {
    opacity: .5;
}

.custom-prev,
.custom-next {
    cursor: pointer;
}
</style>