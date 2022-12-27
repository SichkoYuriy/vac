<template>
    <div class="preloader" v-if="!isLoaded">
        <div class="preloader__container">
            <img src="@/assets/preloader.svg" alt="">
            <p>Loading ...</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoaded: false
        }
    },
    mounted() {
        document.onreadystatechange = () => {
            if (document.readyState == 'complete') {
                this.isLoaded = true;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.preloader {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 99;

    .preloader__container {
        flex-direction: column;

        img {
            margin-bottom: 20px;
        }

        p {
            margin: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
            text-align: center;
            letter-spacing: 0.02em;
            color: #606276;
        }
    }
}
</style>