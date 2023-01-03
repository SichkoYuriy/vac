<template>
    <div class="catalog-acordeon">
        <div class="catalog-acordeon__container">
            <div class="catalog-acordeon__title" :class="{ active: open }" @click="open = !open">
                <slot name="title"></slot>
                <img src="@/assets/arrow-down.svg">
            </div>
            <transition name="fade">
                <div class="catalog-acordeon__filter" v-show="open">
                    <slot name="filter"></slot>
                </div>
            </transition>
            <transition name="fade">
                <div class="catalog-acordeon__chosed">
                    <slot name="chosed"></slot>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all .3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.catalog-acordeon {
    width: 100%;
    height: fit-content;
    background: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 10px 20px;

    .catalog-acordeon__container {

        .catalog-acordeon__title {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            font-weight: 500;
            font-size: 16px;
            line-height: 159%;
            color: #41456B;

            &.active {
                img {
                    transform: rotate(180deg);
                }
            }
        }

        .catalog-acordeon__filter {
            margin-top: 20px;
        }
    }
}
</style>