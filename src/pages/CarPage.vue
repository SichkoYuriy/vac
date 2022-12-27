<template>
    <header-block blue="apply for this vehicle" :blueVisible="buttonVisible" :toQuiz="toQuiz"></header-block>
    <div class="car">
        <div class="car__container _container">
            <div class="car__main">
                <div class="car__name">
                    <p class="car__name-text">{{ product.marke }} {{ product.model }}</p>
                    <p class="car__name-watching car__type-name">Watching now {{ (Math.random() * 100).toFixed(0) }}
                        people </p>
                </div>
                <div class="car__images">
                    <div class="car__images-main">
                        <swiper :modules="modules" :thumbs="{ swiper: thumbsSwiper }" class="car-slider__main"
                            :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }">
                            <swiper-slide v-for="img in product.photo" :key="img" class="car-slide__main">
                                <img :src="img.img" v-if="exterior">
                                <img :src="img.img1" v-if="interior">
                            </swiper-slide>
                        </swiper>

                        <base-button class="car__images-exterior" white title="exterior" @click="setExterior()"
                            :class="{ active: exterior }" />
                        <base-button class="car__images-interior" white title="interior" @click="setInterior()"
                            :class="{ active: interior }" />
                        <img class="car__images-share" src="@/assets/Share-white.svg">
                    </div>
                    <div class="car__images-slider">
                        <swiper :modules="modules" watch-slides-progress @swiper="setThumbsSwiper" class="car-slider"
                            :space-between="10" :slides-per-view="'auto'">
                            <swiper-slide v-for="img in product.photo" :key="img" class="car-slide">
                                <img :src="img.img" v-if="exterior">
                                <img :src="img.img1" v-if="interior">
                            </swiper-slide>
                        </swiper>
                        <div class="custom-next"><img src="@/assets/arrow-next-blue.svg"></div>
                        <div class="custom-prev"><img src="@/assets/arrow-prev-blue.svg"></div>
                    </div>
                    <router-link :to="toQuiz">
                        <base-button blue title="apply for this vehicle" class="car__images-button" />
                    </router-link>
                </div>
                <div class="car__info">
                    <div class="car__general">
                        <div class="car__general-price">
                            <p class="car__type-name">Price</p>
                            <p class="car__value-name violet">{{ formattedPrice }} $</p>
                        </div>
                        <div class="car__general-body">
                            <p class="car__type-name">Body</p>
                            <p class="car__value-name">{{ product.bodyType }}</p>
                        </div>
                        <div class="car__general-year">
                            <p class="car__type-name">Year</p>
                            <p class="car__value-name">{{ product.year }}</p>
                        </div>
                        <div class="car__general-transmission">
                            <p class="car__type-name">Transmission</p>
                            <p class="car__value-name">{{ product.transmission }}</p>
                        </div>
                        <div class="car__general-kilometres">
                            <p class="car__type-name">Kilometres</p>
                            <p class="car__value-name">{{ formattedKilometres }}</p>
                        </div>
                    </div>
                    <span class="car-line"></span>
                    <div class="car__detail">
                        <p class="car__type-name">Detail</p>
                        <p class="car__detail-name">{{ product.detail.wheelDrive }}</p>
                        <p class="car__detail-name">{{ product.detail.cylindersQuantity }}</p>
                        <p class="car__detail-name">{{ product.detail.fuelConsumption }}</p>
                        <p class="car__detail-name">{{ product.detail.topSpeed }}</p>
                        <p class="car__detail-name">{{ product.detail.horsePower }}</p>
                        <p class="car__detail-name">{{ product.detail.acceleration }}</p>
                        <p class="car__detail-name">{{ product.detail.powerSteering }}</p>
                        <p class="car__detail-name">{{ product.detail.rpm }}</p>
                    </div>
                    <span class="car-line"></span>
                    <div class="car__description">
                        <p class="car__type-name">Description</p>
                        <p class="car__description-text">
                            {{ product.description }}
                        </p>
                        <base-button blue title="Request more information" />
                    </div>
                </div>
            </div>
            <calculator-component :amount-visible="false" car-price-visible :amountValue="product.price"
                blue-button-tiltle="apply for this vehicle" :calculator-text="false"
                calculator-title="Calculate the installment plan for this car." />
        </div>
    </div>
    <footer-block />
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import BaseButton from '@/components/BaseButton.vue';
import CalculatorComponent from '@/components/CalculatorComponent.vue';
import { ref } from 'vue';
import { Thumbs, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
    components: {
        HeaderBlock, FooterBlock, BaseButton, CalculatorComponent, Swiper, SwiperSlide,
    },
    setup() {
        const thumbsSwiper = ref(null);
        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };
        return {
            Thumbs,
            thumbsSwiper,
            setThumbsSwiper,
            modules: [Navigation, Thumbs],
        };
    },
    data() {
        return {
            image: '',
            exterior: true,
            interior: false,
            width: 0,
            buttonVisible: true,
        }
    },
    methods: {
        setExterior() {
            this.exterior = true;
            this.interior = false;
        },
        setInterior() {
            this.exterior = false;
            this.interior = true;
        },
        setImage(a) {
            this.image = a;
        },
        hideBlueButton() {
            this.width = window.innerWidth;
            if (this.width < 550) {
                this.buttonVisible = false
            } else {
                this.buttonVisible = true
            }
        }
    },
    created() {
        window.addEventListener('resize', this.hideBlueButton);
    },
    computed: {
        productId() {
            return +this.$route.params.id;
        },
        product() {
            return this.$store.getters.getProduct(this.productId);
        },
        formattedPrice() {
            const num = new Intl.NumberFormat('ru-RU').format(this.product.price);
            return num;
        },
        formattedKilometres() {
            const num = new Intl.NumberFormat('ru-RU').format(this.product.kilometres);
            return num;
        },
        toQuiz() {
            return `/quiz-page/${this.product.id}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.car {
    width: 100%;
    flex: 1 1 auto;

    .car__container {
        width: 100%;

        p {
            margin: 0;
        }

        .car__main {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 160px;
            padding-top: 40px;

            .car__type-name {
                font-weight: 500;
                font-size: 16px;
                line-height: 159%;
                color: #606276;
            }

            .car__value-name {
                font-weight: 700;
                font-size: 25px;
                line-height: 140%;
                letter-spacing: 0.02em;
                color: #41456B;
            }

            .car-line {
                display: flex;
                width: 100%;
                height: 1px;
                background-color: #D7D7D7;
                margin: 60px 0;
            }

            .car__name {
                width: 100%;
                margin-bottom: 20px;

                .car__name-text {
                    font-weight: 700;
                    font-size: 45px;
                    line-height: 140.5%;
                    color: #41456B;
                }
            }

            .car__images {
                width: 54%;

                .car__images-main {
                    position: relative;
                    margin-bottom: 15px;

                    .car-slider__main {
                        width: 100%;
                        height: 370px;
                        border-radius: 2px;

                        .car-slide__main {
                            width: 100%;
                            height: 100%;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }

                    .car__images-exterior {
                        position: absolute;
                        width: 110px;
                        height: 35px;
                        bottom: 20px;
                        left: 20px;
                        border: none;
                        background: rgba(215, 215, 215, 0.2);
                        color: #fff;
                        z-index: 3;

                        &.active {
                            background: #fff;
                            color: #41456B;
                        }
                    }

                    .car__images-interior {
                        position: absolute;
                        width: 110px;
                        height: 35px;
                        bottom: 20px;
                        left: 140px;
                        border: none;
                        background: rgba(215, 215, 215, 0.2);
                        color: #fff;
                        z-index: 3;

                        &.active {
                            background: #fff;
                            color: #41456B;
                        }
                    }

                    .car__images-share {
                        position: absolute;
                        bottom: 26px;
                        right: 20px;
                        color: #fff;
                        z-index: 3;
                    }
                }

                .car__images-slider {
                    width: 100%;
                    height: 92px;
                    position: relative;

                    .custom-next {
                        position: absolute;
                        z-index: 3;
                        top: calc((100% - 53px) / 2);
                        right: 0;
                    }

                    .custom-prev {
                        position: absolute;
                        z-index: 3;
                        top: calc((100% - 53px) / 2);
                        left: 0;
                    }

                    .car-slider {
                        width: 100%;
                        height: 100%;

                        .car-slide {
                            width: auto;
                            height: 100%;

                            img {
                                width: 200px;
                                height: 100%;
                                border-radius: 2px;
                            }
                        }
                    }
                }

                .car__images-button {
                    display: none;
                }
            }

            .car__info {
                width: 42%;

                .car__general {
                    display: flex;
                    flex-wrap: wrap;

                    .car__general-price {
                        width: 100%;

                        .violet {
                            color: #7481FF;
                        }
                    }

                    .car__general-price,
                    .car__general-body,
                    .car__general-year {
                        margin-bottom: 20px;
                    }

                    .car__general-body,
                    .car__general-year,
                    .car__general-transmission,
                    .car__general-kilometres {
                        width: 50%;
                    }
                }

                .car__detail {
                    display: flex;
                    flex-wrap: wrap;

                    .car__type-name {
                        width: 100%;
                        margin-bottom: 20px;

                    }

                    .car__detail-name {
                        width: 50%;
                        margin-bottom: 20px;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 25px;
                        color: #41456B;
                    }
                }

                .car__description {
                    .car__type-name {
                        margin-bottom: 20px;
                    }

                    .car__description-text {
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                        letter-spacing: 0.02em;
                        color: #606276;
                        margin-bottom: 40px;
                    }

                    button {
                        width: 280px;
                        height: 45px;
                    }
                }
            }
        }
    }
}

@media (max-width: 1225px) {
    .car {
        .car__container {
            .car__main {
                box-sizing: border-box;
                padding: 0 25px;
            }
        }
    }
}

@media (max-width: 978px) {
    .car {
        .car__container {
            .car__main {
                width: 80%;
                margin: 0 auto;
                margin-bottom: 120px;

                .car__name {
                    width: 100%;
                    margin-bottom: 20px;
                }

                .car__images {
                    width: 100%;
                    margin-bottom: 150px;

                    .car__images-main {
                        .car-slider__main {
                            height: 340px;
                        }
                    }
                }

                .car__info {
                    width: 100%;
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .car {
        .car__container {
            .car__value-name {

                font-size: 20px;
            }

            .car__main {
                width: 100%;
                margin: 0;
                margin-bottom: 40px;
                padding: 0 20px;

                .car-line {
                    margin: 40px 0;
                }

                .car__name {
                    margin-bottom: 10px;

                    .car__name-text {
                        font-size: 30px;
                    }
                }

                .car__images {
                    margin-bottom: 80px;

                    .car__images-main {
                        margin-bottom: 8px;

                        .car__images-exterior {
                            width: 100px;
                            height: 30px;
                            bottom: 10px;
                            left: 10px;
                        }

                        .car__images-interior {
                            width: 100px;
                            height: 30px;
                            bottom: 10px;
                            left: 120px;
                        }

                        .car__images-share {
                            bottom: 12px;
                            right: 10px;
                            width: 22px;
                            height: 22px;
                        }
                    }

                    .car__images-slider {
                        height: 50px;

                        .custom-next {
                            top: calc((100% - 35px) / 2);

                            img {
                                width: 35px;
                                height: 35px;
                            }
                        }

                        .custom-prev {
                            top: calc((100% - 35px) / 2);

                            img {
                                width: 35px;
                                height: 35px;
                            }
                        }

                        .car-slider {

                            .car-slide {

                                img {
                                    width: 110px;
                                }
                            }
                        }
                    }
                }

                .car__info {
                    .car__detail {
                        flex-direction: column;

                        .car__detail-name {
                            font-size: 18px;
                            width: 100%;

                            &:last-child {
                                margin-bottom: 0;
                            }
                        }
                    }

                    .car__description {
                        .car__type-name {
                            margin-bottom: 10px;
                        }

                        .car__description-text {
                            margin-bottom: 30px;
                        }

                        button {
                            width: 250px;
                            height: 35px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 550px) {
    .car {
        .car__container {
            .car__main {
                .car__images {
                    .car__images-button {
                        display: block;
                        width: 100%;
                        height: 35px;
                        margin-top: 20px;
                    }

                    .car__images-main {
                        .car-slider__main {
                            height: 190px;
                        }
                    }
                }
            }
        }
    }

}
</style>