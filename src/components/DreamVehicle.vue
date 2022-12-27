<template>
    <div class="dream-vehicle">
        <div class="dream-vehicle__container _container">
            <div class="dream-vehicle__img">
                <img src="@/assets/cars.png" alt="cars">
            </div>
            <div class="dream-vehicle__block">
                <div class="dream-vehicle__title">
                    <p>Сhoose your dream vehicle in our catalog</p>
                </div>
                <div class="dream-vehicle__text">
                    <p>In our catalogue there are many models of vehicles. Choose your car to your liking.</p>
                    <base-button title="inventory" :blue="true" @click="toCatalog" />
                </div>
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
        toCatalog() {
            this.$router.push("/catalog-page");
        },
    },
}
</script>

<style lang="scss" scoped>
.dream-vehicle {
    width: 100%;
    height: fit-content;
    margin: 200px 0;

    .dream-vehicle__container {
        display: flex;
        justify-content: space-between;

        .dream-vehicle__img {
            width: 50%;

            img {
                width: 100%;
            }
        }

        .dream-vehicle__block {
            width: 40%;
            display: flex;
            flex-direction: column;

            .dream-vehicle__title {
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;
                color: #41456B;
                border: 1px solid #FFFFFF;
                margin-bottom: 20px;

                p {
                    margin: 0;
                }
            }

            .dream-vehicle__text {
                display: flex;
                flex-direction: column;

                p {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                    letter-spacing: 0.02em;
                    color: #606276;
                    margin: 0;
                    margin-bottom: 40px;
                }

                button {
                    width: 190px;
                    height: 45px;
                }
            }
        }
    }
}

@media (max-width: 1225px) {
    .dream-vehicle {
        margin: 150px 0;

        .dream-vehicle__container {
            flex-direction: column;
            align-items: center;
            padding: 0 25px;

            .dream-vehicle__img {
                order: 2;
                width: 80%;

                img {
                    width: 100%;
                }
            }

            .dream-vehicle__block {
                order: 1;
                width: 80%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                margin-bottom: 60px;

                .dream-vehicle__title {
                    max-width: 300px;
                    margin-bottom: 0;

                    p {
                        margin: 0;
                    }
                }

                .dream-vehicle__text {
                    max-width: 240px;
                }
            }
        }
    }
}

@media (max-width:767px) {
    .dream-vehicle {
        margin: 80px 0;

        .dream-vehicle__container {
            padding: 0 20px;

            .dream-vehicle__img {
                width: 100%;
            }

            .dream-vehicle__block {
                order: 1;
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-bottom: 30px;

                .dream-vehicle__title {
                    max-width: 100%;
                    margin-bottom: 0;
                    font-size: 30px;
                }

                .dream-vehicle__text {
                    max-width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    p {
                        margin-bottom: 30px;
                    }

                    button {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>