<template>
    <div class="perfect-car">
        <div class="perfect-car__container _container">
            <div class="perfect-car__title">
                <p>Your perfect car in 5 easy steps</p>
            </div>
            <div class="perfect-car__block">
                <div class="perfect-car__sec1">
                    <easy-steps :steps="steps" />
                </div>
                <div class="perfect-car__sec2">
                    <img class="perfect-car__img" src="@/assets/perfect-car.png" alt="">
                    <img class="perfect-car__img2" src="@/assets/perfect-car2.png" alt="">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import EasySteps from './EasySteps.vue';
export default {
    components: {
        EasySteps,
    },
    data() {
        return {
            steps: [
                { number: 1, text: 'Tell us what your dream vehicle is.', title: 'First Contact' },
                {
                    number: 2, text: 'One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.', title: 'Vehicle Selection'
                },
                {
                    number: 3, text: 'You work with a dedicated Qualified Agent to secure financing on your terms.', title: 'Secure Financing'
                },
                {
                    number: 4, text: 'We deliver your car to your home or office for you to test drive.', title: 'Vehicle Delivery'
                },
                {
                    number: 5, text: 'If you love the vehicle, you sign the paperwork and keep the car..', title: 'Getting Vehicle'
                },

            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.perfect-car {
    width: 100%;
    height: fit-content;

    .perfect-car__container {
        display: flex;
        flex-direction: column;

        .perfect-car__title {
            max-width: 400px;
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;
            color: #41456B;
        }

        .perfect-car__block {
            display: flex;

            .perfect-car__sec1 {
                flex-basis: 50%;
            }

            .perfect-car__sec2 {
                flex-basis: 50%;

                img {
                    width: 100%;
                }

                .perfect-car__img2 {
                    display: none;
                }
            }
        }
    }
}

@media (max-width: 1225px) {
    .perfect-car {
        .perfect-car__container {
            padding: 0 25px;

            .perfect-car__title {
                max-width: 100%;
            }

            .perfect-car__block {
                display: flex;

                .perfect-car__sec1 {
                    flex-basis: 60%;
                }

                .perfect-car__sec2 {
                    flex-basis: 40%;

                    img {
                        width: auto;
                    }

                    .perfect-car__img2 {
                        margin: 0 auto;
                        display: block;
                    }

                    .perfect-car__img {
                        display: none;
                    }
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .perfect-car {
        .perfect-car__container {
            padding: 0 20px;

            .perfect-car__title {
                font-size: 30px;

            }

            .perfect-car__block {
                display: flex;
                flex-direction: column;

                .perfect-car__sec1 {
                    flex-basis: 100%;
                }

                .perfect-car__sec2 {
                    flex-basis: 100%;

                    img {
                        width: 100%;
                        min-height: 320px;
                    }

                    .perfect-car__img {
                        margin: 0 auto;
                        display: block;
                    }

                    .perfect-car__img2 {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>