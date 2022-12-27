<template>
    <div class="easy-step" v-for="step in steps" :key="step">
        <div class="easy-step__sec1">
            <img src="@/assets/triangle.png" alt="">
            <p class="easy-step__number">{{ step.number }}</p>
        </div>
        <div class="easy-step__sec2">
            <p class="easy-step__title">{{ step.title }}</p>
            <p class="easy-step__text">{{ step.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        steps: {
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
            number: {
                type: Number,
                required: true,
                default: ''
            },
        }
    }
}
</script>

<style lang="scss" scoped>
.easy-step {
    width: 100%;
    display: flex;
    min-height: 70px;
    margin-bottom: 38px;

    .easy-step__sec1 {
        padding-right: 20px;
        width: 75px;
        position: relative;

        img {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }

        .easy-step__number {
            position: absolute;
            top: 0;
            left: 32px;
            font-weight: 700;
            font-size: 25px;
            line-height: 140%;
            text-align: center;
            letter-spacing: 0.02em;
            color: #41456B;
            z-index: 2;
        }
    }

    .easy-step__sec2 {
        display: flex;
        flex-direction: column;
        width: calc(100% - 100px);

        p {
            margin: 0;
        }

        .easy-step__title {
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            color: #41456B;
            margin-bottom: 5px;
        }

        .easy-step__text {
            max-width: 450px;
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
            letter-spacing: 0.02em;
            color: #606276;
        }
    }
}

@media (max-width:767px) {
    .easy-step {
        width: 100%;
        display: flex;
        min-height: 50px;
        margin-bottom: 20px;

        .easy-step__sec1 {
            padding-right: 20px;
            width: 55px;

            img {
                width: 53px;
                height: 47px;
            }

            .easy-step__number {
                left: 21px;
                top: -5px;
                font-size: 20px;
            }
        }

        .easy-step__sec2 {
            p {
                margin: 0;
            }

            .easy-step__title {
                font-size: 18px;
            }

            .easy-step__text {
                max-width: 100%;
            }
        }
    }
}
</style>