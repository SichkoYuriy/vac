<template>
    <div class="calculator">
        <div class="calculator__container _container">
            <div class="calculator__block1">
                <p class="calculator__title" :class="{ onlytitle: carPriceVisible }">{{ calculatorTitle }}</p>
                <p class="calculator__text" v-if="calculatorText">Before you start shopping, let’s figure out how much
                    you can afford. Move
                    the sliders to see how the loan duration and
                    the total loan amount affect your monthly payments.</p>
            </div>
            <div class="calculator__block2">
                <div class="calculator__sec1">
                    <div class="calculator__btn-group">
                        <button @click="buttonPoor" :class="{ blue: activeBtn === 'btn1' }">poor</button>
                        <button @click="buttonAverage" :class="{ blue: activeBtn === 'btn2' }">average</button>
                        <button @click="buttonGood" :class="{ blue: activeBtn === 'btn3' }">good</button>
                    </div>

                    <div class="calculator__amount" v-if="amountVisible">
                        <div class="calculator__amount-title">
                            <p class="calculator__sec1-subtitle">Loan Amount</p>
                            <p class="calculator__sec1-value">$ {{ Intl.NumberFormat('ru-RU').format(amount) }}</p>
                        </div>
                        <input class="calculator__input" type="range" min="0" max="600000" step="10000" v-model="amount"
                            @input="updateAmount" :style="{ backgroundSize: amountBackgroundSize }">
                    </div>
                    <div class="calculator__amount" v-if="carPriceVisible">
                        <div class="calculator__amount-title">
                            <p class="calculator__sec1-subtitle">Loan Amount</p>
                            <p class="calculator__sec1-value">$ {{ Intl.NumberFormat('ru-RU').format(amountValue) }}</p>
                        </div>
                        <span class="car-price-line"></span>
                    </div>
                    <div class="calculator__duration">
                        <div class="calculator__duration-title">
                            <p class="calculator__sec1-subtitle">Loan Duration</p>
                            <p class="calculator__sec1-text">
                                <span class="calculator__sec1-value">{{ duration }}</span>month
                            </p>
                        </div>
                        <input class="calculator__input" type="range" min="1" max="60" v-model="duration"
                            @input="updateDuration" :style="{ backgroundSize: durationBackgroundSize }">
                    </div>
                </div>
                <div class="calculator__sec2">
                    <div class="calculator__sec2-items">
                        <div class="calculator__sec2-item1">
                            <p class="calculator__block2-text">Bi-Weekly Payment</p>
                            <p class="calculator__block2-text2">$ {{ biWeekly }}</p>
                        </div>
                        <div class="calculator__sec2-item2">
                            <p class="calculator__block2-text">Monthly Payment</p>
                            <p class="calculator__block2-text3">$ &nbsp;{{ mohthly }}</p>
                        </div>
                        <div class="calculator__sec2-item3">
                            <p class="calculator__block2-text">Weekly Payment</p>
                            <p class="calculator__block2-text3">$ &nbsp;{{ weekly }}</p>
                        </div>
                    </div>

                    <base-button blue :title=blueButtonTiltle @click="toQuiz" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
    data() {
        return {
            activeBtn: 'btn1',
            amount: 150000,
            duration: 18,
            amountBackgroundSize: '25% 100%',
            durationBackgroundSize: '30% 100%',
        }
    },
    computed: {
        biWeekly() {
            if (this.carPriceVisible) {
                return ((this.amountValue / this.duration) / 2).toFixed(0)
            }
            else {
                return ((this.amount / this.duration) / 2).toFixed(0)
            }
        },
        weekly() {
            if (this.carPriceVisible) {
                return ((this.amountValue / this.duration) / 4).toFixed(0)
            }
            else {
                return ((this.amount / this.duration) / 4).toFixed(0)
            }
        },
        mohthly() {
            if (this.carPriceVisible) {
                return ((this.amountValue / this.duration)).toFixed(0)
            }
            else {
                return ((this.amount / this.duration)).toFixed(0)
            }
        },

    },
    props: {
        amountValue: {
            type: Number,
            default: '',
        },
        carPriceVisible: {
            type: Boolean,
            default: false,
        },
        amountVisible: {
            type: Boolean,
            default: true,
        },
        blueButtonTiltle: {
            type: String,
            default: 'request a car'
        },
        calculatorText: {
            type: Boolean,
            default: true
        },
        calculatorTitle: {
            type: String,
            default: 'Let’s figure out how much you can afford'
        },
    },
    methods: {
        toQuiz() {
            this.$router.push("/quiz-page");
        },
        buttonPoor() {
            this.activeBtn = 'btn1';
            this.duration = 18;
            this.amountBackgroundSize = '25% 100%';
            this.durationBackgroundSize = '30% 100%';
            this.amount = 150000;
        },
        buttonAverage() {
            this.activeBtn = 'btn2';
            this.amount = 300000;
            this.duration = 30;
            this.amountBackgroundSize = '50% 100%';
            this.durationBackgroundSize = '50% 100%';
            this.amount = 300000;
        },
        buttonGood() {
            this.activeBtn = 'btn3';
            this.duration = 24;
            this.amountBackgroundSize = '83% 100%';
            this.durationBackgroundSize = '40% 100%';
            this.amount = 500000;
        },
        updateAmount(e) {
            let clickedElement = e.target,
                min = clickedElement.min,
                max = clickedElement.max,
                val = clickedElement.value;
            this.amountBackgroundSize = (val - min) * 100 / (max - min) + '% 100%';
        },
        updateDuration(e) {
            let clickedElement = e.target,
                min = clickedElement.min,
                max = clickedElement.max,
                val = clickedElement.value;
            this.durationBackgroundSize = (val - min) * 100 / (max - min) + '% 100%';
        },
    },
    components: {
        BaseButton,
    }
}
</script>

<style lang="scss" scoped>
.car-price-line {
    display: flex;
    width: 100%;
    height: 1px;
    background-color: #D7D7D7;
}

.calculator {
    width: 100%;

    .calculator__container {
        display: flex;
        flex-direction: column;
        gap: 60px;
        padding: 40px 0;

        .calculator__block1 {
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                margin: 0;
            }

            .calculator__title {
                max-width: 500px;
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;
                color: #41456B;
            }

            .onlytitle {
                max-width: 650px;
            }

            .calculator__text {
                max-width: 600px;
                font-weight: 400;
                font-size: 16px;
                line-height: 180%;
                letter-spacing: 0.02em;
                color: #606276;
            }
        }

        .calculator__block2 {
            display: flex;
            gap: 3%;

            .calculator__sec1 {
                width: 66%;
                height: 478px;
                box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                padding: 60px;
                box-sizing: border-box;

                p {
                    margin: 0;
                }

                .calculator__btn-group {
                    display: flex;
                    margin-bottom: 55px;

                    button {
                        height: 50px;
                        padding: 18px;
                        background-color: #fff;
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 14px;
                        text-align: center;
                        letter-spacing: 0.02em;
                        text-transform: uppercase;
                        color: #7481FF;
                        background-color: #FFFFFF;
                        border: 1px solid #7481FF;

                        &:nth-of-type(2) {
                            border-right: none;
                            border-left: none;
                        }
                    }

                    .blue {
                        background-color: #7481FF;
                        color: #FFFFFF;
                        border: 1px solid #7481FF;
                    }
                }

                .calculator__sec1-subtitle {
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 25px;
                    color: #41456B;
                }

                .calculator__sec1-value {
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 140%;
                    text-align: right;
                    letter-spacing: 0.02em;
                    color: #41456B;
                }

                input[type=range] {
                    width: 100%;
                    -webkit-appearance: none;
                    background: #D7D7D7;
                    background-image: -webkit-gradient(linear, 20% 0%, 20% 100%, color-stop(0%, #7481FF), color-stop(100%, #7481FF));
                    background-image: -webkit-linear-gradient(left, #7481FF 0%, #7481FF 100%);
                    background-image: -moz-linear-gradient(left, #7481FF 0%, #7481FF 100%);
                    background-image: -o-linear-gradient(to right, #7481FF 0%, #7481FF 100%);
                    background-image: linear-gradient(to right, #7481FF 0%, #7481FF 100%);
                    background-repeat: no-repeat;

                    &::-webkit-slider-runnable-track {
                        width: 100%;
                        -webkit-appearance: none;
                        border-radius: 2px;
                        height: 8px;
                        background: transparent;
                    }

                    &::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        width: 18px;
                        height: 18px;
                        background: #7481FF;
                        border: 1px solid #FFFFFF;
                        border-radius: 2px;
                        margin-top: -5px;
                    }
                }

                .calculator__amount {
                    margin-bottom: 65px;

                    .calculator__amount-title {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 25px;
                    }
                }

                .calculator__duration {
                    .calculator__duration-title {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 25px;

                        .calculator__sec1-text {
                            font-weight: 700;
                            font-size: 16px;
                            line-height: 14px;
                            letter-spacing: 0.02em;
                            text-transform: uppercase;
                            color: #606276;
                        }

                        span {
                            margin-right: 5px;
                        }
                    }
                }
            }

            .calculator__sec2 {
                width: 30%;
                height: 478px;
                box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                padding: 60px;
                box-sizing: border-box;

                .calculator__sec2-items {
                    p {
                        margin: 0;
                    }

                    .calculator__block2-text {
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                        letter-spacing: 0.02em;
                        color: #606276;
                    }

                    .calculator__block2-text2 {
                        font-weight: 700;
                        font-size: 45px;
                        line-height: 140.5%;
                        color: #7481FF;
                        margin-bottom: 30px;
                    }

                    .calculator__block2-text3 {
                        font-weight: 700;
                        font-size: 25px;
                        line-height: 140%;
                        letter-spacing: 0.02em;
                        color: #41456B;
                    }

                    .calculator__sec2-item2 {
                        .calculator__block2-text3 {
                            margin-bottom: 20px;
                        }
                    }
                }

                button {
                    width: 100%;
                    height: 45px;
                    margin-top: 40px;
                }
            }
        }
    }
}

@media (max-width: 1225px) {
    .calculator {

        .calculator__container {
            padding: 40px 25px;

            .calculator__block1 {
                gap: 60px;

                .calculator__title {
                    min-width: 360px;
                }

                .calculator__text {
                    min-width: 300px;
                }
            }

            .calculator__block2 {
                flex-direction: column;
                gap: 0;
                box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                border-radius: 5px;

                .calculator__sec1 {
                    width: 100%;
                    height: fit-content;
                    box-shadow: none;
                    border-radius: 0;
                    padding: 40px 40px 20px 40px;

                    .calculator__btn-group {
                        display: flex;
                        margin-bottom: 35px;

                        button {
                            &:nth-of-type(1) {
                                border-radius: 2px 0 0 2px;
                            }

                            &:nth-of-type(3) {
                                border-radius: 0 2px 2px 0;
                            }
                        }
                    }

                    .calculator__amount {
                        margin-bottom: 45px;
                    }
                }

                .calculator__sec2 {
                    width: 100%;
                    height: fit-content;
                    box-shadow: none;
                    border-radius: 0;
                    padding: 20px 40px 40px 40px;

                    .calculator__sec2-items {
                        display: flex;

                        .calculator__block2-text2 {
                            margin-bottom: 0;
                        }

                        .calculator__sec2-item1 {
                            flex-grow: 2;
                        }

                        .calculator__sec2-item2 {
                            margin-right: 40px;

                            .calculator__block2-text3 {
                                margin-bottom: 0;
                            }
                        }
                    }

                    button {
                        width: 250px;
                    }
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .calculator {

        .calculator__container {
            padding: 40px 20px;
            gap: 30px;

            .calculator__block1 {
                gap: 10px;
                flex-direction: column;

                .calculator__title {
                    width: 100%;
                    min-width: unset;
                    max-width: unset;
                    font-size: 30px;
                }

                .calculator__text {
                    width: 100%;
                    min-width: unset;
                    max-width: unset;
                }
            }

            .calculator__block2 {

                .calculator__sec1 {
                    padding: 20px;

                    .calculator__btn-group {
                        margin-bottom: 40px;

                        button {
                            height: 35px;
                            flex-grow: 1;
                            padding: 10px;
                        }
                    }

                    .calculator__amount {
                        margin-bottom: 30px;
                    }
                }

                .calculator__sec2 {
                    padding: 20px;

                    .calculator__sec2-items {
                        display: flex;
                        flex-wrap: wrap;

                        .calculator__block2-text2 {
                            margin-bottom: 0;
                            font-size: 35px;
                        }

                        .calculator__block2-text3 {
                            font-size: 20px;
                        }

                        .calculator__sec2-item1 {
                            flex-grow: unset;
                            width: 100%;
                            margin-bottom: 10px;
                        }

                        .calculator__sec2-item2 {
                            margin-right: 0;
                            width: 50%;
                        }

                        .calculator__sec2-item3 {
                            width: 50%;
                        }
                    }

                    button {
                        width: 100%;
                        height: 35px;
                    }
                }
            }
        }
    }
}

@media (max-width:374px) {
    .calculator {
        .calculator__container {
            .calculator__block2 {
                .calculator__sec1 {
                    .calculator__btn-group {
                        width: 100%;

                        button {
                            padding: unset;
                        }
                    }
                }
            }
        }
    }
}
</style>