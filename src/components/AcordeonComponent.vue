<template>
    <div class="accordion">
        <div class="accordion__container _container" v-for="accordion in accordions" :key="accordion"
            @click="accordion.open = !accordion.open">
            <div class="accordion__title" :class="{ active: accordion.open }">
                <p>{{ accordion.title }}</p>
                <img src="@/assets/arrow-down.svg" alt="">
            </div>
            <transition name="fade">
                <div class="accordion__text" v-show="accordion.open">
                    {{ accordion.text }}
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        accordions: {
            type: Array,
            title: {
                type: String,
                default: '',
                required: true,
            },
            text: {
                type: String,
                default: '',
                required: true,
            },
            open: {
                type: Boolean,
                default: false
            }
        }
    },
}
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: all .6s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.accordion {
    cursor: pointer;
    width: 100%;
    margin: 40px 0;

    .accordion__container {
        box-sizing: border-box;
        margin: 15px auto;
        height: fit-content;
        display: flex;
        flex-direction: column;
        border: 1px solid #D7D7D7;
        padding: 20px 30px 20px 30px;

        .accordion__title {
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            color: #41456B;
            display: flex;
            justify-content: space-between;

            p {
                margin: 0;
                max-width: 95%;
            }

            &.active {

                img {
                    transform: rotate(180deg);
                }
            }
        }

        .accordion__text {
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
            letter-spacing: 0.02em;
            color: #606276;
            max-width: 1075px;
            margin-top: 10px;
        }
    }
}

@media (max-width:1225px) {
    .accordion {

        .accordion__container {
            margin: 15px 25px;
        }
    }
}

@media (max-width:768px) {
    .accordion {

        .accordion__container {
            margin: 15px 20px;
        }
    }
}
</style>