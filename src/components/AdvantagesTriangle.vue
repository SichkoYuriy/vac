<template>
    <div class="advantages-triangle">
        <img src="@/assets/advantages-triangle.png" alt="">

        <div class="advantages-triangle__info">
            <slot></slot>
            <p class="advantages-triangle__title">{{ title }}</p>
            <p class="advantages-triangle__text">{{ text }} </p>
        </div>
    </div>
</template>

<script>
export default {
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
    }
}
</script>

<style lang="scss" scoped>
.advantages-triangle {
    height: 430px;
    width: 480px;
    position: relative;

    img {
        height: 430px;
        width: 480px;
        position: absolute;
        top: 15px;
        left: 0;
    }

    .advantages-triangle__info {
        max-width: 320px;
        text-align: center;
        position: absolute;
        top: 125px;
        left: 80px;

        p {
            margin: 0;
        }

        .advantages-triangle__title {
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            text-align: center;
            color: #41456B;
            margin-bottom: 5px;
        }

        .advantages-triangle__text {
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
            text-align: center;
            letter-spacing: 0.02em;
            color: #606276;
        }
    }
}

@media (max-width: 767px) {
    .advantages-triangle {
        height: fit-content;
        width: fit-content;
        position: static;
        margin-bottom: 30px;

        img {
            display: none;
        }

        .advantages-triangle__info {
            position: static;

            .advantages-triangle__title {
                font-size: 18px;
            }
        }
    }
}
</style>