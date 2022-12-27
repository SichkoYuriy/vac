<template>
    <div class="title">
        <div class="title__container">
            <div class="title__text">
                <p>{{ titleText }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titleText: {
            type: String,
            default: '',
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.title {
    width: 100%;

    .title__container {
        box-sizing: border-box;
        width: 100%;
        height: 145px;
        font-weight: 800;
        font-size: 60px;
        line-height: 108.5%;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        background: url(@/assets/pageTitle__cover.jpg) no-repeat;
        background-size: cover;

        .title__text {
            max-width: 1200px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
        }
    }
}

@media (max-width:1225px) {
    .title {
        .title__container {
            padding: 0 25px;
        }
    }
}

@media (max-width:767px) {
    .title {
        .title__container {
            height: 116px;
            padding: 0 20px;
            font-size: 35px;
        }
    }
}
</style>