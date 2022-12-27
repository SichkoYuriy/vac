<template>
    <router-link tag="button" :to="linkOpen" class="router">
        <div class="catalog-card">
            <div class="catalog-card__container">
                <div class="catalog-card__images">
                    <swiper :modules="modules" class="catalog-card__slider" :pagination="{ type: 'progressbar', }">
                        <swiper-slide><img :src="cars.img1"></swiper-slide>
                        <swiper-slide><img :src="cars.img2"></swiper-slide>
                        <swiper-slide><img :src="cars.img3"></swiper-slide>
                    </swiper>
                </div>
                <div class="catalog-card__info">
                    <p class="catalog-card__name">{{ cars.marke }} {{ cars.model }}</p>
                    <p class="catalog-card__price"><span>$</span> {{ Intl.NumberFormat('ru-RU').format(cars.price) }}
                    </p>

                    <div class="catalog-card__characters">
                        <p class="catalog-card__text">{{ cars.year }} year <span>|</span> {{ cars.bodyType }}
                            <span>|</span>
                            {{ cars.transmission }}
                        </p>
                        <p class="catalog-card__text">{{ cars.kilometres }} Kilometres</p>
                    </div>
                </div>
            </div>
        </div>
    </router-link>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';

import 'swiper/scss';
import "swiper/css/pagination";

export default {
    components: {
        Swiper, SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination]
        }
    },
    props: {
        cars: {
            id: {
                type: Number,
                required: true,
            },
            img1: {
                type: String,
                required: true,
            },
            img2: {
                type: String,
                required: true,
            },
            img3: {
                type: String,
                required: true,
            },
            marke: {
                type: String,
                required: true,
            },
            model: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            year: {
                type: Number,
                required: true,
            },
            bodyType: {
                type: String,
                required: true,
            },
            transmission: {
                type: String,
                required: true,
            },
            kilometres: {
                type: Number,
                required: true,
            },
        }
    },
    computed: {
        formattedPrice() {
            const num = new Intl.NumberFormat('ru-RU').format(this.price);
            return num;
        },
        linkOpen() {
            return `/catalog-page/${this.cars.id}`;
        },
    }
}
</script>

<style>
.swiper-pagination-progressbar {
    background-color: rgba(255, 255, 255, 0.2);
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background-color: rgba(255, 255, 255, .7);
    width: 100%;
    height: 5px;
    border-radius: 28px;
}

.swiper-horizontal>.swiper-pagination-progressbar {
    width: 90%;
    height: 5px;
    border-radius: 28px;
    top: unset;
    bottom: 10px;
    left: 5%;
}
</style>
<style lang="scss" scoped>
.router {
    width: 49%;

    .catalog-card {
        width: 100%;
        margin-bottom: 20px;

        p {
            margin: 0;
        }

        .catalog-card__container {
            .catalog-card__images {
                width: 100%;
                height: 220px;

                .catalog-card__slider {
                    width: 100%;
                    height: 100%;

                    img {
                        border-radius: 5px 5px 0 0;
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .catalog-card__info {
                box-sizing: border-box;
                padding: 20px;
                width: 100%;
                box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                border-radius: 0 0 5px 5px;

                .catalog-card__name {
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 25px;
                    color: #41456B;
                    margin-bottom: 10px;
                }

                .catalog-card__price {
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 25px;
                    color: #7481FF;
                    margin-bottom: 20px;
                }

                .catalog-card__characters {

                    .catalog-card__text {
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                        letter-spacing: 0.02em;
                        color: #41456B;

                        span {
                            margin: 0 20px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .router {
        width: 100%;

        .catalog-card {
            .catalog-card__container {
                .catalog-card__images {
                    height: 300px;
                }

                .catalog-card__info {
                    .catalog-card__name {
                        font-size: 18px;
                    }

                    .catalog-card__price {
                        font-size: 18px;
                    }

                    .catalog-card__characters {
                        .catalog-card__text {
                            span {
                                margin: 0 10px;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 500px) {
    .router {
        .catalog-card {

            .catalog-card__container {

                .catalog-card__images {
                    height: 220px;
                }
            }
        }
    }
}
</style>