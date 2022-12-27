<template>
    <div class="quiz__card">
        <p class="quiz__question">{{ question }}</p>
        <p class="quiz__desr">{{ text }}</p>
        <div class="quiz__card-content">
            <slot></slot>
        </div>
        <div class="quiz-buttons">
            <base-button blue title="Сontinue" @click="currentModel ? next() : ''"
                :class="{ 'width160': questionIndex >= 1 }" />
            <span v-if="questionIndex >= 1" class="quiz__button-back" @click="prev">
                <img src="@/assets/arrow-back.svg">BACK</span>
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
        question: {
            type: String,
            default: '',
            required: true,
        },
        text: {
            type: String,
            default: '',
            required: true,
        },
        currentModel: {
            default: '',
            required: true,
        },
        next: {
            default: '',
            required: true,
        },
        prev: {
            default: '',
            required: true,
        },
        questionIndex: {
            type: Number,
            default: '',
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>
.quiz__card {
    width: 100%;
    height: fit-content;
    margin-top: 60px;

    .quiz__question {
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: #41456B;
        margin-bottom: 5px;
    }

    .quiz__desr {
        font-weight: 400;
        font-size: 16px;
        line-height: 159%;
        color: #7C7A84;
    }

    .quiz__card-content {
        margin: 40px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .quiz-buttons {
        display: flex;
        align-items: center;
        gap: 65px;

        button {
            width: 225px;
            height: 45px;
        }

        .quiz__button-back {
            font-weight: 700;
            font-size: 16px;
            line-height: 14px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #606276;

            &:hover {
                cursor: default;
            }

            img {
                vertical-align: middle;
                margin-right: 15px;
            }
        }
    }
}

@media (max-width: 767px) {

    .quiz__card {
        margin-top: 30px;

        .quiz__card-content {
            margin-top: 20px;
            margin-bottom: 30px;
        }

        .quiz-buttons {
            justify-content: space-between;
            gap: 0;

            button {
                width: 100%;
                height: 35px;
                order: 2;
            }

            .width160 {
                width: 160px;
            }

            .quiz__button-back {
                margin-left: 70px;
                font-size: 14px;
                order: 1;
            }
        }
    }
}
</style>