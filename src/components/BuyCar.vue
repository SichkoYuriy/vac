<template>
    <div class="buy-car">
        <div class="buy-car__container _container">
            <div class="buy-car__section">
                <p class="buy-car__header">The easiest way to buy a car in Canada</p>
                <base-button title='Request a suv' class="buy-car__button1" :white="true" @click="toQuiz" />
            </div>
            <div class="by-car__slider-container">
                <slider-component id="buycar">
                    <template v-slot:slide1><img src="@/assets/Nissan.png"></template>
                    <template v-slot:slide2><img src="@/assets/Ford.png"></template>
                    <template v-slot:slide3><img src="@/assets/Ram.png"></template>
                    <template v-slot:slide4><img src="@/assets/Dodge.png"></template>
                    <div class="custom-next-buycar"><img src="@/assets/arrow-next.svg"></div>
                    <div class="custom-prev-buycar"><img src="@/assets/arrow-prev.svg"></div>
                </slider-component>

            </div>
            <base-button title='Request a suv' class="buy-car__button2" :white="true" @click="toQuiz" />
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
import SliderComponent from '@/components/SliderComponent.vue';


export default {
    name: 'BuyCar',
    components: {
        SliderComponent, BaseButton,
    },
    methods: {
        toQuiz() {
            this.$router.push("/quiz-page");
        }
    }
}
</script>

<style lang="scss" scoped>
.buy-car {
    height: 600px;
    background: url(@/assets/homePage__cover.jpg) no-repeat center center;
    background-size: cover;

    .buy-car__container {
        display: flex;

        .buy-car__section {
            margin-top: 120px;

            .buy-car__header {
                margin: 0;
                margin-bottom: 60px;
                max-width: 534px;
                font-weight: 800;
                font-size: 60px;
                line-height: 108.5%;
                letter-spacing: 0.02em;
                color: #FFFFFF;
            }

            .buy-car__button1 {
                width: 200px;
                height: 45px;
            }
        }

        .buy-car__button2 {
            display: none;
            width: 200px;
            height: 45px;
        }

        .by-car__slider-container {
            position: relative;
            width: 599px;
            margin: 0 auto;

            .custom-prev-buycar {
                position: absolute;
                top: calc(75% - 53px);
                left: 0;
                z-index: 2;

                img {
                    width: 53px;
                    height: 53px;
                }
            }

            .custom-next-buycar {
                position: absolute;
                top: calc(75% - 53px);
                right: 0;
                z-index: 2;

                img {
                    width: 53px;
                    height: 53px;
                }
            }

            .slider {
                margin: 0 auto;
                width: 490px;
                margin-top: 177px;

                .slider-component {
                    width: 100%;

                    .slider-component__slide {
                        width: 100%;

                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 1220px) {
    .buy-car {
        height: 725px;

        .buy-car__container {
            padding: 0 25px;
            flex-direction: column;

            .buy-car__section {
                margin-top: 50px;

                .buy-car__header {
                    text-align: center;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .buy-car__button1 {
                    display: none;
                }
            }

            .by-car__slider-container {
                .custom-prev-buycar {
                    top: calc(55% - 53px);
                }

                .custom-next-buycar {
                    top: calc(55% - 53px);
                }

                .slider {
                    margin-top: 60px;
                    margin-bottom: 60px;
                }
            }

            .buy-car__button2 {
                display: block;
                margin: 0 auto;
            }
        }
    }
}

@media (max-width: 650px) {
    .buy-car {
        height: fit-content;

        .buy-car__container {

            .buy-car__section {
                margin-top: 60px;

                .buy-car__header {
                    font-size: 45px;
                }
            }

            .by-car__slider-container {
                width: 100%;

                .custom-next-buycar,
                .custom-prev-buycar {
                    img {
                        width: 35px;
                        height: 35px;
                    }
                }

                .slider {
                    margin-top: 40px;
                    margin-bottom: 40px;
                    width: 90%;
                }
            }

            .buy-car__button2 {
                margin-bottom: 94px;
            }
        }
    }
}

@media (max-width: 376px) {
    .buy-car {
        .buy-car__container {
            .buy-car__section {
                .buy-car__header {
                    max-width: 308px;
                    font-size: 35px;
                }
            }
        }
    }
}
</style>