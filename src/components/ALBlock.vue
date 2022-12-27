<template>
    <div class="al-block">
        <div class="al-block__container _container">
            <div class="al-block__sec1">
                <p class="al-block__title">{{ title }}</p>
                <p class="al-block__text">{{ text }}</p>
                <base-button :blue="true" title="request a car" @click="toCar" />
            </div>
            <div class="al-block__sec2">
                <slot name="image"></slot>
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
    props: {
        title: {
            type: String,
            required: true,
            default: ''
        },
        text: {
            type: String,
            required: true,
            default: ''
        },
    },
    methods: {
        toCar() {
            this.$router.push("/quiz-page");
        },
    }
}
</script>

<style lang="scss" scoped>
.al-block {
    width: 100%;
    height: fit-content;
    margin: 40px 0 200px 0;

    .al-block__container {
        display: flex;
        justify-content: space-between;

        .al-block__sec1 {
            box-sizing: border-box;
            width: 48%;
            box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            padding: 60px;

            p {
                margin: 0;
            }

            .al-block__title {
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;
                color: #41456B;
                margin-bottom: 20px;
            }

            .al-block__text {
                font-weight: 400;
                font-size: 16px;
                line-height: 180%;
                letter-spacing: 0.02em;
                color: #606276;
                margin-bottom: 40px;
            }

            button {
                width: 200px;
                height: 45px;
            }
        }

        .al-block__sec2 {
            width: 45%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            img {
                width: 100%;
            }
        }
    }
}

@media (max-width: 1225px) {
    .al-block {
        margin: 40px 0 150px 0;

        .al-block__container {
            flex-direction: column;
            align-items: center;

            .al-block__sec1 {
                width: 80%;
                padding: 40px;
                margin-bottom: 40px;
            }

            .al-block__sec2 {
                width: 80%;
            }
        }
    }
}

@media (max-width: 767px) {
    .al-block {
        margin: 30px 0 80px 0;

        .al-block__container {
            padding: 0 20px;

            .al-block__sec1 {
                width: 100%;
                padding: 20px;
                margin-bottom: 30px;

                .al-block__title {
                    font-size: 30px;
                    margin-bottom: 10px;
                }

                .al-block__text {
                    margin-bottom: 30px;
                }

                button {
                    width: 100%;
                    height: 35px;
                }
            }

            .al-block__sec2 {
                width: 100%;
            }
        }
    }
}
</style>