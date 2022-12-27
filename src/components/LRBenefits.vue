<template>
    <div class="lr-benefits">
        <div class="lr-benefits__container _container">
            <div class="lr-benefits__block1">
                <p class="lr-benefits__title">Benefits of getting an auto loan with VAC</p>
                <p class="lr-benefits__text">For many people getting a reasonable auto loan is the best way for them to
                    get a new car. However, the benefits of
                    getting the right loan go beyond just being able to drive a nice vehicle.
                </p>
                <p class="lr-benefits__subtitle">When you work with VAC, there are never any hidden costs or fees! We
                    lay out all the terms and conditions so that you
                    know exactly what details of the loan are before you sign anything.</p>
                <base-button :blue="true" title="request a car" @click="toCar" />
            </div>
            <div class="lr-benefits__block2">
                <img src="@/assets/Ford-Escape.png" alt="ford escape">
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
    components: {
        BaseButton
    },
    methods: {
        toCar() {
            this.$router.push("/quiz-page");
        },
    },
}
</script>

<style lang="scss" scoped>
.lr-benefits {
    width: 100%;
    margin-bottom: 200px;

    .lr-benefits__container {
        display: flex;
        justify-content: space-between;

        .lr-benefits__block1 {
            width: 45%;

            p {
                margin: 0;
            }

            .lr-benefits__title {
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;
                color: #41456B;
                margin-bottom: 20px;
            }

            .lr-benefits__text {
                font-size: 16px;
                line-height: 180%;
                letter-spacing: 0.02em;
                color: #606276;
                margin-bottom: 20px;
            }

            .lr-benefits__subtitle {
                font-weight: 600;
                font-size: 20px;
                line-height: 25px;
                color: #41456B;
                margin-bottom: 40px;
            }

            button {
                width: 200px;
                height: 45px;
            }
        }

        .lr-benefits__block2 {
            width: 50%;

            img {
                width: 100%;
            }
        }
    }
}

@media (max-width: 1225px) {
    .lr-benefits {
        margin-bottom: 150px;

        .lr-benefits__container {
            flex-direction: column;
            align-items: center;
            gap: 40px;

            .lr-benefits__block1 {
                width: 80%;
            }

            .lr-benefits__block2 {
                width: 80%;
            }
        }
    }
}

@media (max-width: 767px) {
    .lr-benefits {
        margin-bottom: 80px;

        .lr-benefits__container {
            padding: 0 20px;
            gap: 30px;

            .lr-benefits__block1 {
                width: 100%;

                .lr-benefits__title {
                    font-size: 30px;
                    margin-bottom: 10px;
                }

                .lr-benefits__subtitle {
                    font-size: 18px;
                    margin-bottom: 30px;
                }

                button {
                    width: 100%;
                    height: 35px;
                }
            }

            .lr-benefits__block2 {
                width: 100%;
            }
        }
    }
}
</style>