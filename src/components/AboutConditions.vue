<template>
    <div class="about-conditions">
        <div class="about-conditions__container _container">
            <div class="about-conditions__block1">
                <p class="title">Get a car at the best prices and conditions</p>
                <p class="text">
                    Not only is buying a car with VAC easy, it’s also the best way to save money. We have partnerships
                    with Canada’s largest
                    lenders. That allows us to help you secure loans at the best interest rates available.

                </p>
                <p class="text">Because convenience and transparency are our founding principles, we
                    take the time to answer all of your questions about
                    the vehicle and the auto loan. We will send you pictures and videos of any part of the car you like
                    before you request a
                    test drive.
                </p>
            </div>
            <div class="about-conditions__block2">
                <p class="subtitle">We think that VAC is the best way to buy
                    a car in Canada. Try it for yourself and see how much time and money you can save.</p>
                <p class="text">There are never any hidden fees or costs. We never ask you to sign
                    anything until we have explained it clearly and you
                    have had a chance to read it.
                </p>
                <base-button :blue="true" title="request a car" @click="toCar" />
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
    components: {
        BaseButton,
    },
    methods: {
        toCar() {
            this.$router.push("/quiz-page");
        },
    },
}
</script>

<style lang="scss" scoped>
.about-conditions {
    width: 100%;
    margin-bottom: 200px;

    .about-conditions__container {
        display: flex;
        justify-content: space-between;

        p {
            margin: 0;
        }

        .about-conditions__block1 {
            width: 45%;

            .title {
                margin-bottom: 20px;
            }

            .text {
                &:not(:last-of-type) {
                    margin-bottom: 20px;
                }
            }
        }

        .about-conditions__block2 {
            width: 45%;

            .text {
                margin-bottom: 20px;
            }

            .subtitle {
                margin-bottom: 40px;
            }

            button {
                width: 200px;
                height: 45px;
            }
        }
    }
}

@media (max-width: 1225px) {
    .about-conditions {
        margin-bottom: 150px;

        .about-conditions__container {
            flex-direction: column;
            align-items: center;
            gap: 40px;

            .about-conditions__block1 {
                width: 80%;
            }

            .about-conditions__block2 {
                width: 80%;
            }
        }
    }
}

@media (max-width: 767px) {
    .about-conditions {
        margin-bottom: 80px;

        .about-conditions__container {
            gap: 20px;
            padding: 0 20px;

            .about-conditions__block1 {
                width: 100%;

                .title {
                    margin-bottom: 10px;
                }

                .text {
                    &:not(:last-of-type) {
                        margin-bottom: 10px;
                    }
                }
            }

            .about-conditions__block2 {
                width: 100%;

                .text {
                    margin-bottom: 30px;
                }

                .subtitle {
                    margin-bottom: 10px;
                }

                button {
                    width: 100%;
                    height: 35px;
                }
            }
        }
    }
}
</style>