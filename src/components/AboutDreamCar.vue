<template>
    <div class="dream-car">
        <div class="dream-car__container _container">
            <div class="dream-car__block1">
                <p class="dream-car__title">Get your dream car</p>
                <p class="dream-car__text">
                    We founded VAC because we hated how complicated it was to buy a car. You only have so much free time
                    in your life. You
                    don’t want to waste it going to different car dealerships every weekend for weeks and months trying
                    to track down the
                    right car.

                </p>
                <p class="dream-car__text">
                    We also hated how choosing a car and figuring out the financing for the vehicle were treated as
                    totally separate
                    processes! Instead of dealing with a salesperson, then being handed off to a closer, and then
                    shuffled over to a finance
                    manager, we wanted to create a way for people to buy a car and only deal with a single person for
                    the entire process.
                </p>
            </div>
            <div class="dream-car__block2">
                <easy-steps :steps="steps" />
            </div>
        </div>
    </div>
</template>

<script>
import EasySteps from './EasySteps.vue';

export default {
    components: {
        EasySteps
    },
    data() {
        return {
            steps: [
                {
                    number: 1, text: 'You do not spend a lot of your time going to car dealerships', title: 'Quickly'
                },
                {
                    number: 2, text: 'You can order your dream car just by talking to our specialist by phone', title: 'Simply'
                },
                {
                    number: 3, text: 'We will deliver the car directly to the doorstep of your home or office', title: 'Conveniently'
                }

            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.dream-car {
    width: 100%;
    margin-bottom: 200px;

    .dream-car__container {
        display: flex;
        justify-content: space-between;

        .dream-car__block1 {
            width: 47%;

            p {
                margin: 0;
            }

            .dream-car__title {
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;
                color: #41456B;
                margin-bottom: 20px;
            }

            .dream-car__text {
                font-weight: 400;
                font-size: 16px;
                line-height: 180%;
                letter-spacing: 0.02em;
                color: #606276;

                &:not(:last-of-type) {
                    margin-bottom: 20px;
                }
            }
        }

        .dream-car__block2 {
            padding-top: 20px;
            width: 47%;
        }
    }
}

@media (max-width: 1225px) {
    .dream-car {
        margin-bottom: 150px;

        .dream-car__container {
            flex-direction: column;
            align-items: center;
            gap: 40px;

            .dream-car__block1 {
                width: 80%;
            }

            .dream-car__block2 {
                padding-top: 0;
                width: 80%;
            }
        }
    }
}

@media (max-width: 767px) {
    .dream-car {
        margin-bottom: 80px;

        .dream-car__container {
            gap: 20px;
            padding: 0 20px;

            .dream-car__block1 {
                width: 100%;

                .dream-car__title {
                    font-size: 30px;
                    margin-bottom: 10px;
                }

                .dream-car__text {

                    &:not(:last-of-type) {
                        margin-bottom: 10px;
                    }
                }
            }

            .dream-car__block2 {
                width: 100%;
            }
        }
    }
}
</style>