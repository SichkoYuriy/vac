<template>
    <div class="client-rewiew">
        <div class="client-rewiew__container _container">
            <div class="client-rewiew__title">
                <p>What our client say about us!</p>
            </div>
            <div class="client-rewiew__slider">
                <slider-component id="clientrewiew">
                    <template v-slot:slide1>
                        <div class="slide__sec1 img1">
                        </div>
                        <div class="slide__sec2">
                            <p class="slide__client-name">Laura Chaisson</p>
                            <p class="slide__text">In irure et ipsum eiusmod adipisicing id elit cillum proident.
                                Adipisicing ullamco nisi veniam occaecat id excepteur ad
                                non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident
                                veniam excepteur non irure Lorem.
                                Lorem esse sint in nisi id esse.</p>
                        </div>
                    </template>
                    <template v-slot:slide2>
                        <div class="slide__sec1 img2">
                        </div>
                        <div class="slide__sec2">
                            <p class="slide__client-name">John Doe</p>
                            <p class="slide__text">In irure et ipsum eiusmod adipisicing id elit cillum proident.
                                Adipisicing ullamco nisi veniam occaecat id excepteur ad
                                non. Sunt occaecat elit ullamco commodo exercitation.</p>
                        </div>
                    </template>
                    <template v-slot:slide3>
                        <div class="slide__sec1 img3">
                        </div>
                        <div class="slide__sec2">
                            <p class="slide__client-name">Kelly Hodson</p>
                            <p class="slide__text">In irure et ipsum eiusmod adipisicing id elit cillum proident.
                                Adipisicing ullamco nisi veniam occaecat id excepteur ad
                                non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident
                                veniam excepteur non irure Lorem.
                                Lorem esse sint in nisi id esse.</p>
                        </div>
                    </template>
                    <template v-slot:slide4>
                        <div class="slide__sec1 img4">
                        </div>
                        <div class="slide__sec2">
                            <p class="slide__client-name">Kate Henderson</p>
                            <p class="slide__text">In irure et ipsum eiusmod adipisicing id elit cillum proident.
                                Adipisicing ullamco exercitation. Anim mollit irure Lorem proident
                                veniam excepteur non irure Lorem.
                                Lorem esse sint in nisi id esse.In irure et ipsum eiusmod adipisicing id elit cillum
                                proident.</p>
                        </div>
                    </template>
                    <div class="custom-next-clientrewiew"><img src="@/assets/arrow-next-blue.svg"></div>
                    <div class="custom-prev-clientrewiew"><img src="@/assets/arrow-prev-blue.svg"></div>
                </slider-component>
            </div>
        </div>
    </div>
</template>

<script>
import SliderComponent from './SliderComponent.vue';
export default {
    components: {
        SliderComponent
    }
}
</script>

<style lang="scss">
.client-rewiew {
    width: 100%;
    margin-bottom: 200px;

    .client-rewiew__container {

        .client-rewiew__title {
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;
            color: #41456B;
            margin-bottom: 60px;
        }

        .client-rewiew__slider {
            width: 100%;
            box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            position: relative;
            z-index: 1;

            .slider-component {
                width: 100%;
                height: 322px;

                .slider-component__slide {
                    display: flex;
                    width: 100%;

                    .img1 {
                        background: url(@/assets/client-review1.jpg) center center no-repeat;
                        background-size: cover;
                    }

                    .img2 {
                        background: url(@/assets/client-review2.jpg) center center no-repeat;
                        background-size: cover;
                    }

                    .img3 {
                        background: url(@/assets/client-review3.jpg) center center no-repeat;
                        background-size: cover;
                    }

                    .img4 {
                        background: url(@/assets/client-review4.jpg) center center no-repeat;
                        background-size: cover;
                    }

                    .slide__sec1 {
                        width: 40%;
                        border-radius: 5px 0 0 5px;
                    }

                    .slide__sec2 {
                        box-sizing: border-box;
                        width: 60%;
                        padding: 54px 60px 0 40px;

                        p {
                            margin: 0;
                        }

                        .slide__client-name {
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 180%;
                            letter-spacing: 0.02em;
                            color: #606276;
                            margin-bottom: 10px;
                        }

                        .slide__text {
                            font-weight: 600;
                            font-size: 20px;
                            line-height: 25px;
                            color: #41456B;
                        }
                    }
                }
            }

            .custom-next-clientrewiew {
                cursor: pointer;
                position: absolute;
                top: calc((100% - 53px) / 2);
                right: 0;
                z-index: 2;
            }

            .custom-prev-clientrewiew {
                cursor: pointer;
                position: absolute;
                top: calc((100% - 53px) / 2);
                left: 0;
                z-index: 2;
            }
        }
    }
}

@media (max-width: 1225px) {
    .client-rewiew {
        margin-bottom: 150px;

        .client-rewiew__container {
            padding: 0 25px;
        }
    }
}

@media (max-width: 767px) {
    .client-rewiew {
        margin-bottom: 80px;

        .client-rewiew__container {
            padding: 0 20px;

            .client-rewiew__title {
                font-size: 30px;
                margin-bottom: 30px;
            }

            .client-rewiew__slider {

                .slider-component {
                    height: fit-content;

                    .slider-component__slide {
                        flex-direction: column;

                        .slide__sec1 {
                            width: 100%;
                            height: 215px;
                            border-radius: 5px 5px 0 0;
                        }

                        .slide__sec2 {
                            box-sizing: border-box;
                            width: 100%;
                            padding: 20px;

                            .slide__text {
                                font-size: 18px;
                            }
                        }
                    }
                }

                .custom-next-clientrewiew {
                    top: 90px;

                    img {
                        width: 35px;
                        height: 35px;
                    }
                }

                .custom-prev-clientrewiew {
                    top: 90px;

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