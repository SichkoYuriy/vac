<template>
    <div class="interesting-slider">
        <div class="interesting-slider__container _container">
            <div class="interesting-slider__block1">
                <p class="interesting-slider__title title">{{ title }}</p>
                <base-button class="interesting-button1" :white="true" title="all articles" @click="toBlog" />
            </div>
            <div class="interesting-slider__block2" @click="toArticle">
                <slider-component :breakpoints="swiperOptions.breakpoints" id="interesting">
                    <template v-slot:slide1>
                        <slot name="interesting-slide1"></slot>
                    </template>
                    <template v-slot:slide2>
                        <slot name="interesting-slide2"></slot>
                    </template>
                    <template v-slot:slide3>
                        <slot name="interesting-slide3"></slot>
                    </template>
                    <template v-slot:slide4>
                        <slot name="interesting-slide4"></slot>
                    </template>
                    <div class="custom-next-interesting" @click.stop><img src="@/assets/arrow-next-blue.svg"></div>
                    <div class="custom-prev-interesting" @click.stop><img src="@/assets/arrow-prev-blue.svg"></div>
                </slider-component>
            </div>
            <base-button class="interesting-button2" :white="true" title="all articles" @click="toBlog" />
        </div>
    </div>
</template>


<script>
import BaseButton from './BaseButton.vue';
import SliderCard from './SliderCard.vue';
import SliderComponent from './SliderComponent.vue';

export default {
    components: {
        BaseButton, SliderCard, SliderComponent,
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        id: {
            type: String,
        },
    },
    methods: {
        toBlog() {
            this.$router.push("/blog-page");
        },
        toArticle() {
            this.$router.push("/article-one");
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    },
    data() {
        return {
            swiperOptions: {
                breakpoints: {
                    375: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 1.1,
                    },
                    500: {
                        slidesPerView: 1.25,
                    },
                    600: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    920: {
                        slidesPerView: 2.15,
                    },
                    1024: {
                        slidesPerView: 2.25,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }
            }
        }
    },

}
</script>

<style lang="scss" scoped>
.interesting-slider {
    width: 100%;

    .interesting-slider__container {

        p {
            margin: 0;
        }

        .interesting-button2 {
            display: none;
        }

        .interesting-slider__block1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 60px;

            .interesting-button1 {
                width: 180px;
                height: 45px;
            }
        }

        .interesting-slider__block2 {
            width: 100%;
            box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
            position: relative;

            .custom-next-interesting {
                position: absolute;
                top: calc((100% - 53px) / 2);
                z-index: 2;
                right: 0;
            }

            .custom-prev-interesting {
                position: absolute;
                top: calc((100% - 53px) / 2);
                z-index: 2;
                left: 0;
            }
        }
    }
}

@media (max-width: 1225px) {
    .interesting-slider {

        .interesting-slider__container {
            padding: 0 25px;
            box-sizing: border-box;
        }
    }
}

@media (max-width: 767px) {
    .interesting-slider {
        margin-bottom: 30px;

        .interesting-slider__container {
            padding: 0 20px;

            .interesting-button2 {
                display: block;
                width: 100%;
                height: 35px;
            }

            .interesting-slider__block1 {
                margin-bottom: 30px;

                .interesting-button1 {
                    display: none;
                }
            }

            .interesting-slider__block2 {

                .custom-next-interesting {
                    top: calc((100% - 35px) / 2.5);

                    img {
                        width: 35px;
                        height: 35px;
                    }
                }

                .custom-prev-interesting {
                    top: calc((100% - 35px) / 2.5);

                    img {
                        width: 35px;
                        height: 35px;
                    }
                }
            }
        }
    }
}
</style>