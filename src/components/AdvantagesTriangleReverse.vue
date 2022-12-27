<template>
    <div class="advantages-reverse">
        <img src="@/assets/advantages-triangle__reverse.png" alt="">
        <div class="advantages-reverse__info">
            <slot></slot>
            <p class="advantages-reverse__title">{{ title }}</p>
            <p class="advantages-reverse__text">{{ text }} </p>
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
.advantages-reverse {
    height: 430px;
    width: 480px;
    position: relative;

    img {
        height: 430px;
        width: 480px;
        position: absolute;
        top: 0;
        left: 0;
    }

    .advantages-reverse__info {
        max-width: 204px;
        text-align: center;
        position: absolute;
        top: 25px;
        left: 140px;

        p {
            margin: 0;
        }

        .advantages-reverse__title {
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            text-align: center;
            color: #41456B;
            margin-bottom: 5px;
        }

        .advantages-reverse__text {
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
        position: static;

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