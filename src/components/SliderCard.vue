<template>
    <div class="slider-card">
        <div class="slider-card__sec1">
            <slot></slot>
        </div>
        <div class="slider-card__sec2">
            <p class="slider-card__date">{{ date }}</p>
            <p class="slider-card__title">{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        date: {
            type: String,
            default: '',
            required: true
        },
        title: {
            type: String,
            default: '',
            required: true
        },
    }
}
</script>

<style lang="scss">
.slider-card {
    max-width: 387px;
    height: 360px;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 25px;

    p {
        margin: 0;
    }

    .slider-card__sec1 {
        img {
            width: 100%;
            height: 64%;
        }
    }

    .slider-card__sec2 {
        height: 36%;
        box-sizing: border-box;
        padding: 20px 30px;

        .slider-card__date {
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
            letter-spacing: 0.02em;
            color: #606276;
        }

        .slider-card__title {
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            color: #41456B;
            max-width: 300px;
        }
    }
}

@media (max-width: 1225px) {
    .slider-card {
        max-width: 350px;
    }
}

@media (max-width: 425px) {
    .slider-card {
        max-width: 100%;
    }
}
</style>