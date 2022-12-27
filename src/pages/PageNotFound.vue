<template>
    <div class="not-found">
        <div class="not-found__block">
            <img src="@/assets/404-sedan.svg" alt="">
            <p class="not-found__header">404 page</p>
            <p class="not-found__text">Page not found or such pages do not exist.</p>
            <base-button blue title="go home" @click="toHome" />
        </div>
    </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
export default {
    components: {
        BaseButton
    },
    methods: {
        toHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.not-found {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;

    .not-found__block {
        max-width: 328px;
        max-height: 232px;
        text-align: center;

        p {
            margin: 0;
        }

        img {
            margin-bottom: 20px;
        }

        .not-found__header {
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;
            color: #41456B;
            margin-bottom: 5px;
        }

        .not-found__text {
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
            text-align: center;
            letter-spacing: 0.02em;
            color: #606276;
            margin-bottom: 40px;
        }

        button {
            width: 165px;
            height: 45px;
        }
    }
}

@media (max-width: 767px) {
    .not-found {
        .not-found__block {
            .not-found__header {
                font-size: 30px;
            }

            .not-found__text {
                max-width: 181px;
                margin-bottom: 30px;
            }

            button {
                width: 130px;
                height: 35px;
            }
        }
    }
}
</style>